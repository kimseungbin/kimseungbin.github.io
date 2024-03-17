const targetTime = new Date('2024-05-05T19:00:00+09:00')

const countdownFunction = setInterval(() => {
    const now = new Date().getTime()
    const countdown = document.getElementById('countdown')

    const timeLeft = targetTime - now

    if (timeLeft < 0) {
        countdown.innerHTML = '생일파티 시작!'
        clearInterval(countdownFunction)
        return
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    countdown.innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
})
