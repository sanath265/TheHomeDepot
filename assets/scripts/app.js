window.onload = () => {

    function showTime() {
        var date = new Date();
        var hour = 23 - date.getHours(); // 0 - 23
        var minutes = 59 - date.getMinutes(); // 0 -59
        var seconds = 59 - date.getSeconds(); // 0 -59

        let session = 'left';

        if (hour === 0) {
            hour = 12;
        }

        if (hour > 12) {
            hour = hour - 12;
            session = 'left';
        }

        hour = (hour < 10) ? '0' + hour : hour;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let time = hour + ':' + minutes + ':' + seconds + ' ' + session;

        document.querySelector('#myTime').innerText = time;


        setTimeout(showTime, 1000);
    }

    showTime();

}