import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Definir a variável de ambiente "PATH" para incluir o diretório atual
chrome_driver_path = os.path.abspath("chromedriver")
os.environ["PATH"] += os.pathsep + os.path.dirname(chrome_driver_path)

# Criar a instância do WebDriver
driver = webdriver.Chrome()

url = 'http://localhost:3000/cadCliente.html'

try:
    driver.get(url)

    # INSERE DADOS CADASTRAIS DO CLIENTE

    input_nomeP = driver.find_element(By.XPATH, '//*[@id="primeiroNome"]')
    input_nomeU = driver.find_element(By.XPATH, '//*[@id="ultimoNome"]')
    input_CPF= driver.find_element(By.XPATH, '//*[@id="cpfId"]')
    input_celular= driver.find_element(By.XPATH, '//*[@id="dddTelefone"]')
    input_dataNasc= driver.find_element(By.XPATH, '//*[@id="dataNasc"]')
    input_email = driver.find_element(By.XPATH, '//*[@id="emailId"]')

    submit = driver.find_element(By.XPATH, '//button[@type="submit"]')

    input_nomeP.send_keys('Usuario')
    input_nomeU.send_keys('Principal')
    input_CPF.send_keys('123456789')
    input_celular.send_keys('35998765432')
    input_email.send_keys('user@email.com')
    input_dataNasc.send_keys('01/01/2000')

    submit.click()

    input("Pressione Enter após verificar os campos preenchidos...")

finally:
    driver.quit()
