package main

import "fmt"

func zeroval(ival int) {
  ival = 0
}

func zeorptr(iptr *int) {
  *iptr = 0
}

func main() {
  i := 1
  fmt.Println("initial:", i)

  zeroval(i)
  fmt.Println("zeroval:", i)

  zeorptr(&i)
  fmt.Println("zeorptr:", i)

  fmt.Println("pointer:", &i)
}
