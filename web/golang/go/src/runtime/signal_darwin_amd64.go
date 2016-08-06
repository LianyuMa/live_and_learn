// Copyright 2013 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package runtime

import "unsafe"

type sigctxt struct {
	info *siginfo
	ctxt unsafe.Pointer
}

func (c *sigctxt) regs() *regs64   { return &(*ucontext)(c.ctxt).uc_mcontext.ss }
func (c *sigctxt) rax() uint64     { return c.regs().rax }
func (c *sigctxt) rbx() uint64     { return c.regs().rbx }
func (c *sigctxt) rcx() uint64     { return c.regs().rcx }
func (c *sigctxt) rdx() uint64     { return c.regs().rdx }
func (c *sigctxt) rdi() uint64     { return c.regs().rdi }
func (c *sigctxt) rsi() uint64     { return c.regs().rsi }
func (c *sigctxt) rbp() uint64     { return c.regs().rbp }
func (c *sigctxt) rsp() uint64     { return c.regs().rsp }
func (c *sigctxt) r8() uint64      { return c.regs().r8 }
func (c *sigctxt) r9() uint64      { return c.regs().r9 }
func (c *sigctxt) r10() uint64     { return c.regs().r10 }
func (c *sigctxt) r11() uint64     { return c.regs().r11 }
func (c *sigctxt) r12() uint64     { return c.regs().r12 }
func (c *sigctxt) r13() uint64     { return c.regs().r13 }
func (c *sigctxt) r14() uint64     { return c.regs().r14 }
func (c *sigctxt) r15() uint64     { return c.regs().r15 }
func (c *sigctxt) rip() uint64     { return c.regs().rip }
func (c *sigctxt) rflags() uint64  { return c.regs().rflags }
func (c *sigctxt) cs() uint64      { return c.regs().cs }
func (c *sigctxt) fs() uint64      { return c.regs().fs }
func (c *sigctxt) gs() uint64      { return c.regs().gs }
func (c *sigctxt) sigcode() uint64 { return uint64(c.info.si_code) }
func (c *sigctxt) sigaddr() uint64 { return c.info.si_addr }

func (c *sigctxt) set_rip(x uint64)     { c.regs().rip = x }
func (c *sigctxt) set_rsp(x uint64)     { c.regs().rsp = x }
func (c *sigctxt) set_sigcode(x uint64) { c.info.si_code = int32(x) }
func (c *sigctxt) set_sigaddr(x uint64) { c.info.si_addr = x }

func (c *sigctxt) fixsigcode(sig uint32) {
	switch sig {
	case _SIGTRAP:
		// OS X sets c.sigcode() == TRAP_BRKPT unconditionally for all SIGTRAPs,
		// leaving no way to distinguish a breakpoint-induced SIGTRAP
		// from an asynchronous signal SIGTRAP.
		// They all look breakpoint-induced by default.
		// Try looking at the code to see if it's a breakpoint.
		// The assumption is that we're very unlikely to get an
		// asynchronous SIGTRAP at just the moment that the
		// PC started to point at unmapped memory.
		pc := uintptr(c.rip())
		// OS X will leave the pc just after the INT 3 instruction.
		// INT 3 is usually 1 byte, but there is a 2-byte form.
		code := (*[2]byte)(unsafe.Pointer(pc - 2))
		if code[1] != 0xCC && (code[0] != 0xCD || code[1] != 3) {
			// SIGTRAP on something other than INT 3.
			c.set_sigcode(_SI_USER)
		}
	}
}
