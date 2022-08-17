.PHONY: all hacker-news-hide-visited-stories.zip

all: hacker-news-hide-visited-stories.zip

hacker-news-hide-visited-stories.zip:
	git ls-files | zip --filesync --must-match -@ hacker-news-hide-visited-stories.zip
