// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function motivationalQuote() {
    const responseFromServer = await fetch('/motivationalQuotes.txt');
    const textFromResponse = await responseFromServer.text();

    const motivationalQuoteText = document.getElementById('motivate-container');
    motivationalQuoteText.innerText = textFromResponse;
}

async function rolesOutput() {
    const responseFromServer = await fetch('/roles');
    const jsonData = await responseFromServer.json();

    const randomText = jsonData[Math.floor(Math.random()*jsonData.length)];

    const whereToOutputRole = document.getElementById('roles-container');
    whereToOutputRole.innerText = randomText;
}

async function sentEmail() {
    const addElement = document.getElementById('successful-submission');
    addElement.innerText = "Thanks for submitting your email! Look out for a message in your inbox soon."
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Programming Language');
  data.addColumn('number', 'Years Coding');
        data.addRows([
          ['C/C++', 4],
          ['Java', 3],
          ['HTMl/CSS', 1],
          ['JavaScript', 1],
          ['Python', 0.5]
        ]);

  const options = {
    'title': 'My Experience in Programming Languages',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}
