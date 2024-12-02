function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
  
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature");
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (unit) {
      case "celsius":
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
        break;
      case "fahrenheit":
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = celsius + 273.15;
        break;
      case "kelvin":
        celsius = temperature - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temperature;
        break;
    }
  
    document.getElementById("celsius-output").textContent = `Celsius: ${celsius.toFixed(2)}`;
    document.getElementById("fahrenheit-output").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById("kelvin-output").textContent = `Kelvin: ${kelvin.toFixed(2)}`;
  }
  