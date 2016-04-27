function getFoo() {
  return new Promise((resolve, reject) => {
    resolve('foo');
  });
}

function run(generator) {
  var it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then((value) => go(it.next(value)), (error) => go(it.throw(error)));
  }

  go(it.next());
}

run(function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (err) {
    console.log(err);
  }
});
