describe("Sum", function () {
    it("Sums all the numbers in the Array ", function () {
      assert.equal(10, sum(1, 2, 3, 4));
    });
  });
  describe("Multiply", function () {
    it("Multiplies all the numbers in the Array", function () {
      assert.equal(6, multiply(1, 2, 3));
    });
  });
  describe("Reverse", function () {
    it("Computes the reversal of a string", function () {
      assert.equal("Aboneh", reverse("henobA"));
    });
  });
  describe("Filter Longwords", function () {
    it("Takes an array of words and an integer i, and returns the array of words that are longer than i", function () {
      var expected = JSON.stringify(["Aboneh", "Manyazewal"]);
      var actual = filterLongWords(["Aboneh", "Mat", "Rita", "Manyazewal"], 5);
      assert.equal(expected, JSON.stringify(actual));
    });
  });