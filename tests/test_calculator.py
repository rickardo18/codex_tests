import os
from pathlib import Path
import time

import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By


@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()


def load_calculator(driver):
    filepath = Path(__file__).resolve().parents[1] / "index.html"
    driver.get(filepath.as_uri())


def click(driver, text):
    btn = driver.find_element(By.XPATH, f"//button[normalize-space(text())='{text}']")
    btn.click()


def get_display(driver):
    return driver.find_element(By.ID, "display").text


def test_addition(driver):
    load_calculator(driver)
    click(driver, "1")
    click(driver, "+")
    click(driver, "2")
    click(driver, "=")
    assert get_display(driver) == "3"


def test_multiplication(driver):
    load_calculator(driver)
    click(driver, "7")
    click(driver, "×")
    click(driver, "3")
    click(driver, "=")
    assert get_display(driver) == "21"
