/**
 * p2d2.js
 * GitHub Pages Powered, GitHub Driven Documentation
 */

if (typeof P2D2 === 'undefined') var P2D2 = (function() {
	var P2D2obj = ({
		repourl: '',
		branch: '',
		mainpage: ''
	});

	P2D2obj._page2lhash = (function(P2D2ref) {
		return (function(p) {
			return '#p2d2:' + p;
		});
	})(P2D2obj);
	P2D2obj._lhash2page = (function(P2D2ref) {
		return (function(h) {
			if (h.length < 7 || h.slice(0, 6) !== '#p2d2:') return '';
			return h.slice(6);
		});
	})(P2D2obj);
	P2D2obj._pageres = (function(P2D2ref) {
		return (function(p) {
			return p + '.md';
		});
	})(P2D2obj);
	P2D2obj._newpage = (function(P2D2ref) {
		return (function() {
			return P2D2ref.repourl + '/new/' + P2D2ref.branch;
		});
	})(P2D2obj);
	P2D2obj._pagerevision = (function(P2D2ref) {
		return (function(p) {
			return P2D2ref.repourl + '/commits/' + P2D2ref.branch + '/' + P2D2ref._pageres(p);
		});
	})(P2D2obj);
	P2D2obj._dorender = (function(P2D2ref) {
		return (function(p, t) {
			document.write(t);
			document.close();
			window.location.hash = P2D2ref._page2lhash(p);
			document.title = p;
		});
	})(P2D2obj);
	P2D2obj._tryrender = (function(P2D2ref) {
		return (function(p) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', P2D2ref._pageres(p), true);
			xhr.onreadystatechange = (function (req) {
				return (function() {
					if (req.readyState == 4) {
						if (req.status == 200) {
							P2D2ref._dorender(p, req.responseText);
						} else if (p !== P2D2ref.mainpage) {
							P2D2ref._tryrender(P2D2ref.mainpage);
						}
					}
				});
			})(xhr);
			xhr.send(null);
		});
	})(P2D2obj);

	P2D2obj.repo = (function(P2D2ref) {
		return (function(r, b) {
			P2D2ref.repourl = r;
			P2D2ref.branch = b;
		});
	})(P2D2obj);
	P2D2obj.main = (function(P2D2ref) {
		return (function(m) {
			P2D2ref.mainpage = m;
		});
	})(P2D2obj);
	P2D2obj.all = (function(P2D2ref) {
		return (function() {
			window.addEventListener('load', function() {
				var p = P2D2ref._lhash2page(window.location.hash);
				P2D2ref._tryrender(p === '' ? P2D2ref.mainpage : p);
			});
		});
	})(P2D2obj);

	return P2D2obj;
})();
