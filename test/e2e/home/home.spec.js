'use strict';

describe('homepage', function(){
  it('should get the homepage', function(){
    browser.get('/');
    expect(browser.getTitle()).toEqual('Adam Barnhard');
    expect(element(by.css('.about h1')).getText()).toMatch(/Adam Barnhard/);
  });
});
