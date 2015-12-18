'use strict';

const tmp = require('tmp');
const fs = require('fs');
const webdriverio = require('webdriverio');
const PageDumper = require('../lib/page_dumper');
const expect = require('chai').expect;

const WEBDRIVER_HOST = process.env.WEBDRIVER_HOST;
const WEBDRIVER_PORT = process.env.WEBDRIVER_PORT || 4444;

describe('ActionCrawler', () => {
  const wd = webdriverio.remote({ host: WEBDRIVER_HOST, port: WEBDRIVER_PORT });
  beforeEach(() => {
    return wd.init().url('http://www.google.com');
  });
  afterEach(() => {
    return wd.end();
  });

  describe('Crawling a simple Page', () => {
    xit('should work', () => {
        // TODO
    });
  });

});
