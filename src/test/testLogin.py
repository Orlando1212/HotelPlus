import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Definir a variável de ambiente "PATH" para incluir o diretório atual
chrome_driver_path = os.path.abspath("chromedriver")
os.environ["PATH"] += os.pathsep + os.path.dirname(chrome_driver_path)

# Criar a instância do WebDriver
driver = webdriver.Chrome()

url = 'http://localhost:3000/'

try:
    driver.get(url)

    # REALIZA O LOGIN DO USUARIO

    input_email = driver.find_element(By.XPATH, '//*[@id="email"]')
    input_password = driver.find_element(By.XPATH, '//input[@id="senha"]')
    submit = driver.find_element(By.XPATH, '//button[@type="submit"]')

    input_email.send_keys('user@email.com')
    input_password.send_keys('aaa')

    submit.click()

    input("Pressione Enter após verificar os campos preenchidos...")

finally:
    driver.quit()
