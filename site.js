(function () {
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function isDark() {
      var explicit = root.getAttribute('data-theme');
      if (explicit) return explicit === 'dark';
      return systemDark.matches;
    }

    function render() {
      btn.innerHTML = isDark()
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>Light'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>Dark';
      btn.className = 'theme-toggle ' + (isDark() ? 'to-light' : 'to-dark');
    }

    btn.addEventListener('click', function () {
      root.setAttribute('data-theme', isDark() ? 'light' : 'dark');
      render();
    });

    systemDark.addEventListener('change', render);
    render();
  })();
