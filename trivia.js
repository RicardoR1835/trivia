$(document).ready(function () {
    function shuffle(arr) {
        for (let i = 0; i < arr.length; i++) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            [arr[-1], arr[i]] = [arr[i], arr[-1]];
        }
        return arr;
    }

    
    for(let i = 0; i < 3; i++){
    $.get("https://opentdb.com/api.php?amount=3&category=21&difficulty=medium", function (data) {
        console.log(data)
        for (q in data) {
            var container = document.getElementById("sports");
            var holder = document.createElement('div')
            var elem = document.createElement('p');
            var que = document.createElement('h6');
            for (let i = 0; i < data[q].length; i++) {
                arr = [];
                console.log(data[q][i]);
                var question = data[q][i].question;
                var inc_answers = data[q][i].incorrect_answers;
                var answer = data[q][i].correct_answer
                inc_answers.push(answer);
                arr.push(inc_answers);
                console.log(question);
                que.innerHTML = question;
                holder.appendChild(que)
                container.appendChild(holder);
                let y = arr.join();
                console.log(y);
                elem.innerHTML = y;
                holder.appendChild(elem)
                container.appendChild(holder);
                holder.className = "holder";
            }

        }
    });
}
    
for(let i = 0; i < 3; i++){
    $.get("https://opentdb.com/api.php?amount=3&category=27&difficulty=medium", function (data) {
        console.log(data)
        for (q in data) {
            var container = document.getElementById("animals");
            var holder = document.createElement('div')
            var elem = document.createElement('p');
            var que = document.createElement('h6');
            for (let i = 0; i < data[q].length; i++) {
                arr = [];
                console.log(data[q][i]);
                var question = data[q][i].question;
                var inc_answers = data[q][i].incorrect_answers;
                var answer = data[q][i].correct_answer
                inc_answers.push(answer);
                arr.push(inc_answers);
                console.log(question);
                que.innerHTML = question;
                holder.appendChild(que)
                container.appendChild(holder);
                let y = arr.join();
                console.log(y);
                elem.innerHTML = y;
                holder.appendChild(elem)
                container.appendChild(holder);
                holder.className = "holder";
            }

        }
    });
}
for(let i = 0; i < 3; i++){
    $.get("https://opentdb.com/api.php?amount=3&category=20&difficulty=medium", function (data) {
        console.log(data)
        for (q in data) {
            var container = document.getElementById("mythology");
            var holder = document.createElement('div')
            var elem = document.createElement('p');
            var que = document.createElement('h6');
            for (let i = 0; i < data[q].length; i++) {
                arr = [];
                console.log(data[q][i]);
                var question = data[q][i].question;
                var inc_answers = data[q][i].incorrect_answers;
                var answer = data[q][i].correct_answer
                inc_answers.push(answer);
                arr.push(inc_answers);
                console.log(question);
                que.innerHTML = question;
                holder.appendChild(que)
                container.appendChild(holder);
                let y = arr.join();
                console.log(y);
                elem.innerHTML = y;
                holder.appendChild(elem)
                container.appendChild(holder);
                holder.className = "holder";
            }

        }
    });
}
    


});


// sports api https://opentdb.com/api.php?amount=3&category=21&difficulty=medium

// animals api  https://opentdb.com/api.php?amount=3&category=27&difficulty=medium

// mythology api https://opentdb.com/api.php?amount=3&category=20&difficulty=medium