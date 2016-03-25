#include <nan.h>

using namespace v8;

NAN_METHOD(Print) {
  printf("I am a native addon and I AM ALIVE!\n");
  info.GetReturnValue().Set(info.This());
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("print").ToLocalChecked(),
      Nan::GetFunction(Nan::New<FunctionTemplate>(Print)).ToLocalChecked());
}

NODE_MODULE(myaddon, Init);
