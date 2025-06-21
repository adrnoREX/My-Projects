package com.tryon.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clothing_item")
@SQLDelete(sql="Update Clothing_Item set is_deleted=true where id=?")
@SQLRestriction("is_deleted=false")
public class ClothingItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private double price;
    @Column
    private String imageUrl;
    @Column
    private String category;
    @Column
    private String subcategory;

	private boolean is_deleted=false;

    public ClothingItem() {
        super();
    }

    public ClothingItem(int id, String name, String description,double price, String imageUrl, String category, String subcategory) {
        super();
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.subcategory = subcategory;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public boolean isIs_deleted() {
        return is_deleted;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public void setIs_deleted(boolean is_deleted) {
        this.is_deleted = is_deleted;
    }

}