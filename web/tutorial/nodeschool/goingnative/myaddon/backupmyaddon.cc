#include <nan.h>
#ifndef _WIN32
#include <unistd.h>
#endif

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

NAN_METHOD(Length) {
  Nan::MaybeLocal<String> maybeStr = Nan::To<String>(info[0]);
  v8::Local<String> str;
  if (maybeStr.ToLocal(&str) == false)
  {
    Nan::ThrowError("Error converting first argument to string");
  }

  int len = strlen(*String::Utf8Value(str));

  info.GetReturnValue().Set(len);
}

NAN_METHOD(Delay) {
  Nan::Maybe<int> maybeDelay = Nan::To<int>(info[0]);

  if (maybeDelay.IsNothing() == true)
  {
    Nan::ThrowError("Error converting first argument to integer");
  }

  int delay = maybeDelay.FromJust();

  if (info[1]->IsFunction() == false)
  {
    Nan::ThrowError("Error converting second argument to function");
  }

  #ifdef _WIN32
  Sleep(delay);
  #else
  usleep(delay * 1000);
  #endif

  v8::Local<Function> callback = info[1].As<Function>();
  Nan::MakeCallback(Nan::GetCurrentContext()->Global(), callback, 0, NULL);
}

// NAN_MODULE_INIT(Init) {
//   Nan::Set(target, Nan::New("print").ToLocalChecked(),
//       Nan::GetFunction(Nan::New<FunctionTemplate>(Print)).ToLocalChecked());
// }

// NAN_MODULE_INIT(Init) {
//   Nan::Set(target, Nan::New("length").ToLocalChecked(),
//       Nan::GetFunction(Nan::New<FunctionTemplate>(Length)).ToLocalChecked());
// }

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("delay").ToLocalChecked(),
      Nan::GetFunction(Nan::New<FunctionTemplate>(Delay)).ToLocalChecked());
}

NODE_MODULE(myaddon, Init);
