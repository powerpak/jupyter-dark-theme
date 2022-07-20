$(function() {
  // If the following is true, we aren't in a Jupyter-provided terminal
  if (!window.terminal || !window.terminal.term) { return; }
  
  // Applies some styling to the xterm.js that runs Jupyter's terminal
  var term = window.terminal.term;

  var adjustFonts = function() {
    if (!term.renderer) {
      // The xterm.js is not ready yet
      // Wait a few event loops and try again
      window.setTimeout(adjustFonts, 100);
      return;
    }

    if (document.fonts && document.fonts.check("16px Cascadia Code")) {
      term.setOption("fontFamily", "Cascadia Code");
      term.setOption("lineHeight", 1.2);
      term.setOption("fontSize", 16);
    } else if (document.fonts && document.fonts.check("16px SF Mono")) {
      term.setOption("fontFamily", "SF Mono");
      term.setOption("lineHeight", 1.2);
      term.setOption("fontSize", 16);
    } else if (document.fonts && document.fonts.check("16px Bitstream Vera Sans Mono")) {
      term.setOption("fontFamily", "Bitstream Vera Sans Mono");
      term.setOption("lineHeight", 1.2);
      term.setOption("fontSize", 16);
    }

    $(window).resize();
  }
  adjustFonts();
});
