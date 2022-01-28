.PHONY: all clean install
.SUFFIXES: .js .scpt

SCPTS=$(patsubst %.js,%.scpt,$(wildcard *.js))

DESTDIR=~/Library/Script\ Libraries/

all: $(SCPTS)

clean:
	rm -f *.scpt *~

install: $(DESTDIR) $(SCPTS)
	cp $(SCPTS) $(DESTDIR)

$(DESTDIR):
	mkdir -p $(DESTDIR)

.js.scpt:
	osacompile -l JavaScript -o $@ $<
