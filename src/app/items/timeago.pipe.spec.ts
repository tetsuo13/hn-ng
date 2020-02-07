import { TimeagoPipe } from './timeago.pipe';

describe('TimeagoPipe', () => {
  let pipe: TimeagoPipe;

  beforeEach(() => {
    pipe = new TimeagoPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should end with 'ago'`, () => {
    expect(pipe.transform(1578694584)).toContain('ago');
  })
});
