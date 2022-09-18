# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Climate.create([{name: "Tropical"}, {name: "Dry"}, {name: "Temperate"}, {name: "Continental"}, {name: "Polar"}])

Plant.create(name: "Monstera", soil: "Potting soil with peat moss that drains easily", image: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_hyde_terracotta_352c69f5-9e8b-4a72-a200-8839c8b92fab.jpg?v=1655957905", light: "Bright, direct light", water: "Water when top half of soil is dry, before leaves droop and curl", climate_id: 1, summary: "Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico.")