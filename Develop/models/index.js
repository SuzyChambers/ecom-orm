// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  onDelete: "set null",
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  onDelete: "set null",
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  onDelete: "set null",
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  onDelete: "set null",
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
