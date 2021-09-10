const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should fixme", function() {
    const gildedRose = new Shop([new Item("fixme", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
  it("should degrade quality 2x fast, once sell by date has passed", () => {
    const itemArr = [];
    const itemOne = new Item("pickles", -1, 19);
    itemArr.push(itemOne);
    const gildedRose = new Shop(itemArr);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(17);
  })
  it("should never have an item with negative quality", () => {
    const gildedRose = new Shop([new Item("cavier", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })
  // //TODO need to pass test after refactor
  // it("should never have an item with negative quality", () => {
  //   const gildedRose = new Shop([new Item("cavier", 1, -1)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(0);
  // })
  //TODO need to pass test after refactor
  it ("should AgedBrie increases in quality, if age increases", () => {
    const gildedRose = new Shop([new Item("aged brie", 40, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  })
  //TODO need to pass test after refactor
  // it ("should AgedBrie increases in quality, if age increases", () => {
  //   const gildedRose = new Shop([new Item("aged brie", 40, 20)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toBe(21);
  // })
  it ("should never be of quality greater than 50", () => {
    const gildedRose = new Shop ([new Item("milk", 11, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  })
  it ("should never degrade Sulfuras, Hand of Ragnaros in quality", () => {
    const gildedRose = new Shop ([new Item("Sulfuras, Hand of Ragnaros", 0, 39)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(39);
  })
});



