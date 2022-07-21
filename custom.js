$(function() {
  // If the following is true, we aren't in a Jupyter-provided terminal
  if (!window.terminal || !window.terminal.term) { return; }
  
  // Applies some styling to the xterm.js that runs Jupyter's terminal
  var term = window.terminal.term;

  var adjustXtermJsStyling = function() {
    if (!term.renderer) {
      // The xterm.js is not ready yet
      // Wait a few event loops and try again
      window.setTimeout(adjustXtermJsStyling, 100);
      return;
    }

    if (document.fonts && document.fonts.check('16px Cascadia Code')) {
      term.setOption('fontFamily', 'Cascadia Code');
      term.setOption('lineHeight', 1.2);
      term.setOption('fontSize', 16);
    } else if (document.fonts && document.fonts.check('15px SF Mono')) {
      term.setOption('fontFamily', 'SF Mono');
      term.setOption('fontWeight', 200);
      term.setOption('lineHeight', 1.1);
      term.setOption('fontSize', 15);
    } else if (document.fonts && document.fonts.check('16px Bitstream Vera Sans Mono')) {
      term.setOption('fontFamily', 'Bitstream Vera Sans Mono');
      term.setOption('lineHeight', 1.2);
      term.setOption('fontSize', 16);
    }
    
    terminal.term.setOption('theme', {
      background: '#000000',
      black: '#000000',
      blue: '#0225c7',
      brightBlack: '#676767',
      brightBlue: '#6871ff',
      brightCyan: '#5ffdff',
      brightGreen: '#5ff967',
      brightMagenta: '#ff76ff',
      brightRed: '#ff6d67',
      brightWhite: '#feffff',
      brightYellow: '#fefb67',
      cursor: '#c7c7c7',
      cursorAccent: '#feffff',
      cyan: '#00c5c7',
      foreground: '#c7c7c7',
      green: '#00c200',
      magenta: '#c930c7',
      red: '#c91b00',
      selection: '#c1ddff',
      white: '#c7c7c7',
      yellow: '#c7c400'
    });

    $(window).resize();
  }
  adjustXtermJsStyling();
});
