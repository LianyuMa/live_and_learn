#include <nan.h>

using namespace v8;

NAN_METHOD(Print) {
  // printf("I am a native addon and I AM ALIVE!\n");
  Nan::MaybeLocal<String> maybeStr = Nan::To<String>(info[0]);
  v8::Local<String> str;
  if (maybeStr.ToLocal(&str) == false)
  {
    Nan::ThrowError("Error converting first argument to string");
  }
  printf("%s\n", *String::Utf8Value(str));
  info.GetReturnValue().Set(info.This());
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("print").ToLocalChecked(),
      Nan::GetFunction(Nan::New<FunctionTemplate>(Print)).ToLocalChecked());
}

NODE_MODULE(myaddon, Init);
