package com.example.cashTracker.controller;

import com.example.cashTracker.model.Product;
import com.example.cashTracker.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products") // Base URL for the product API
public class ProductController {

    @Autowired
    private ProductRepository productRepository; // Repository to handle product data

    // GET method to retrieve all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // GET method to retrieve a product by its ID
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id);
    }

    // POST method to create a new product
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // PUT method to update an existing product
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productRepository.update(id, product);
    }

    // DELETE method to remove a product by its ID
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepository.delete(id);
    }
}
