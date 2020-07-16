package com.zhogntai.driveserver.dao;

public class Series {
    private int id;
    private int deptid;
    private String name;

    public Series(int id, int deptid, String name) {
        this.id = id;
        this.deptid = deptid;
        this.name = name;
    }

    public Series() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDeptid() {
        return deptid;
    }

    public void setDeptid(int deptid) {
        this.deptid = deptid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
