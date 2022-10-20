package com.example.worldpinbackend.models;

public class Reply {

    private String message;

    private boolean passed;

    public Reply( boolean passed,String message) {
        this.message = message;
        this.passed = passed;
    }

    public Reply() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isPassed() {
        return passed;
    }

    public void setPassed(boolean passed) {
        this.passed = passed;
    }
}
