.PHONY: install clean links

install: links
	@$(MAKE) -C Libraries install

clean:
	@$(MAKE) -C Libraries clean
	rm -f Scripts/play Scripts/pause

links: Scripts/play Scripts/pause
Scripts/play:
	cd Scripts && ln -s playpause play
Scripts/pause:
	cd Scripts && ln -s playpause pause
