
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'This is some content.';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('div class="zippy__content"')).getText()).toEqual(expectedMsg);
  });

});
