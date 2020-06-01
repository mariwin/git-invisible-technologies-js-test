import weather from '../weather'

describe("weather",  () => {
  describe("getCurrentTimeWeather", () => {
    it("should work for Lisbon", done => {
      weather.getCurrentTimeWeather("Lisbon", result => {
        expect(typeof result).toBe('string');
        done();
      })
    });
    it("should work for Berlin", done => {
      weather.getCurrentTimeWeather("Berlin", result => {
        expect(typeof result).toBe('string');
        done();
      })
    });
    it("should work for Tokyo", done => {
      weather.getCurrentTimeWeather("Tokyo", result => {
        expect(typeof result).toBe('string');
        done();
      })
    });
    it("should return undefined for a non-existing location or postal", done => {
      weather.getCurrentTimeWeather("Blablabla", result => {
        expect(result).toEqual(`Blablabla - no data`);
        done();
      })
    });
  });
});