import { HostnamePipe } from './hostname.pipe';

describe('HostnamePipe', () => {
  let pipe: HostnamePipe;

  beforeEach(() => {
    pipe = new HostnamePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Calculations', () => {
    it('should extract hostname', () => {
      expect(pipe.transform("https://www.example.com/foo/bar")).toEqual("www.example.com");
    });
  });

  describe('Bad Inputs', () => {
    it('should return null', () => {
      expect(pipe.transform(null)).toEqual(null);
    });

    it('should return undefined', () => {
      expect(pipe.transform(undefined)).toEqual(undefined);
    });
  });
});
