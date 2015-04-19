let {expect} = chai;

describe('The test setup', function() {
  it('runs in a browser context', function() {
    expect(window).to.exist;
    expect(document).to.exist;
  });

  it('is consistent', function() {
    expect(true).not.to.eq.false;
  });
});
