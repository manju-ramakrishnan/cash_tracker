package com.example.cashTracker.repository;

import com.example.cashTracker.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ProductRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate; // Spring's JdbcTemplate for database operations

    // RowMapper to map ResultSet to Product object
    private RowMapper<Product> rowMapper = new RowMapper<Product>() {
        @Override
        public Product mapRow(@SuppressWarnings("null") ResultSet rs, int rowNum) throws SQLException {
            Product product = new Product();
            product.setId(rs.getLong("id")); // Map ID
            product.setName(rs.getString("name")); // Map Name
            product.setCategory(rs.getString("category")); // Map Category
            product.setPrice(rs.getDouble("price")); // Map Price
            product.setStatus(rs.getInt("status")); // Map Status
            return product;
        }
    };

    // Retrieve all active products from the database
    public List<Product> findAll() {
        String sql = "SELECT * FROM products WHERE status = 1"; // Only active products
        return jdbcTemplate.query(sql, rowMapper);
    }

    // Retrieve a product by its ID
    public Product findById(Long id) {
        String sql = "SELECT * FROM products WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, rowMapper, id);
    }

    // Save a new product to the database
    public Product save(Product product) {
        String sql = "INSERT INTO products (name, category, price, status) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, product.getName(), product.getCategory(), product.getPrice(), 1); // Set status to 1
                                                                                                   // (active)
        return product; // You may want to set the generated ID after insertion
    }

    // Update an existing product
    public Product update(Long id, Product product) {
        String sql = "UPDATE products SET name = ?, category = ?, price = ? WHERE id = ?"; // Update
        jdbcTemplate.update(sql, product.getName(), product.getCategory(), product.getPrice(), id);
        return product;
    }

    // Soft delete a product by setting its status to 0
    public void delete(Long id) {
        String sql = "UPDATE products SET status = 0 WHERE id = ?"; // Soft delete
        jdbcTemplate.update(sql, id);
    }
}
