var els = document.querySelectorAll('[data-auriel]')
for(var i = 0; i < els.length; i++) {
  let el = els[i]
  auriel(el)
}

function auriel(el) {
  
  let flux = el.querySelector('[data-auriel-flux]')
  let timer_read = el.querySelector('[data-auriel-timer-read]')
  let timer_length = el.querySelector('[data-auriel-timer-length]')
  let controls_prev = el.querySelector('[data-auriel-controls-prev]')
  let controls_next = el.querySelector('[data-auriel-controls-next]')
  let controls_play = el.querySelector('[data-auriel-controls-play]')
  let controls_pause = el.querySelector('[data-auriel-controls-pause]')
  let progress_buffer = el.querySelector('[data-auriel-progress-buffer]')
  let progress_player = el.querySelector('[data-auriel-progress-player]')
  
  flux.addEventListener('loadedmetadata', function(e) {
    
    let duration = this.duration
        let duration_Hour = duration / 3600
            duration_Hour = parseInt(duration_Hour, 10)
        let duration_Minutes = (duration - 3600 * duration_Hour) / 60
            duration_Minutes = parseInt(duration_Minutes, 10)
        let duration_Seconds = (duration - 3600 * duration_Hour) - (60 * duration_Minutes)
            duration_Seconds = parseInt(duration_Seconds, 10)
    
    if(duration_Hour >= 1) {
      if(duration_Minutes < 10) { duration_Minutes = '0' + duration_Minutes }
      if(duration_Minutes === 0) { duration_Minutes = '00' }
      if(duration_Seconds < 10) { duration_Seconds = '0' + duration_Seconds }
      if(duration_Seconds === 0) { duration_Seconds = '00' }
      
      timer_length.innerHTML = duration_Hour + ':' + duration_Minutes + ':' + duration_Seconds
    } else if(duration_Minutes >= 1) {
      if(duration_Seconds < 10) { duration_Seconds = '0' + duration_Seconds }
      if(duration_Seconds === 0) { duration_Seconds = '00' }
      
      timer_length.innerHTML = duration_Minutes + ':' + duration_Seconds
    } else {
      if(duration_Seconds < 10) { duration_Seconds = '0' + duration_Seconds }
      if(duration_Seconds === 0) { duration_Seconds = '00' }
      
      timer_length.innerHTML = duration_Minutes + ':' + duration_Seconds
    }
  })
  
  flux.addEventListener('timeupdate', function(e) {
    let duration = this.duration
    let played = flux.played.end(0)
    let buffered = flux.buffered.end(0)
    
    let played_Hour = played / 3600
        played_Hour = parseInt(played_Hour, 10)
    let played_Minutes = (played - 3600 * played_Hour) / 60
        played_Minutes = parseInt(played_Minutes, 10)
    let played_Seconds = played - (60 * played_Minutes) - (3600 * played_Hour)
        played_Seconds = parseInt(played_Seconds, 10)
    
    let played_Width = (played / duration) * 100
    let buffered_Width = (buffered / duration) * 100
    
    progress_buffer.style.width = buffered_Width + '%'
    progress_player.style.width = played_Width + '%'
    
    if(played_Hour >= 1) {
      if(played_Minutes < 10) { played_Minutes = '0' + played_Minutes }
      if(played_Minutes === 0) { played_Minutes = '00' }
      if(played_Seconds < 10) { played_Seconds = '0' + played_Seconds }
      if(played_Seconds === 0) { played_Seconds = '00' }
      
      timer_read.innerHTML = played_Hour + ':' + played_Minutes + ':' + played_Seconds
    } else if(played_Minutes >= 1) {
      if(played_Seconds < 10) { played_Seconds = '0' + played_Seconds }
      if(played_Seconds === 0) { played_Seconds = '00' }
      
      timer_read.innerHTML = played_Minutes + ':' + played_Seconds
    } else {
      if(played_Seconds < 10) { played_Seconds = '0' + played_Seconds }
      if(played_Seconds === 0) { played_Seconds = '00' }
      
      timer_read.innerHTML = played_Minutes + ':' + played_Seconds
    }
    
    if(duration === played) {
      flux.load()
      timer_read.innerHTML = '00:00'
      buffered_Width.style.width = 0
      played_Width.style.width = 0
    }
  })
  
  controls_play.addEventListener('click', function(e) {
    e.preventDefault()
    
    flux.play()
    controls_play.style.display = 'none'
    controls_pause.style.display = 'block'
  })
  
  controls_pause.addEventListener('click', function(e) {
    e.preventDefault()
    
    flux.pause()
    controls_pause.style.display = 'none'
    controls_play.style.display = 'block'
  })
}