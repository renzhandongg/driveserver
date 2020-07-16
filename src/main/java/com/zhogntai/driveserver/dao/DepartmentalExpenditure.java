package com.zhogntai.driveserver.dao;

public class DepartmentalExpenditure {
    private int id;
    private String xAxis;
    private int percentage;
    private int expenditure;
    private int budget;

    public DepartmentalExpenditure() {
    }

    public DepartmentalExpenditure(int percentage, int expenditure, int budget) {
        this.percentage = percentage;
        this.expenditure = expenditure;
        this.budget = budget;
    }

    public DepartmentalExpenditure(int id, String xAxis, int percentage, int expenditure, int budget) {
        this.id = id;
        this.xAxis = xAxis;
        this.percentage = percentage;
        this.expenditure = expenditure;
        this.budget = budget;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getxAxis() {
        return xAxis;
    }

    public void setxAxis(String xAxis) {
        this.xAxis = xAxis;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public int getExpenditure() {
        return expenditure;
    }

    public void setExpenditure(int expenditure) {
        this.expenditure = expenditure;
    }

    public int getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }
}
