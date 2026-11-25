[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/kampungamanah/oneliner3-marathon/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/kampungamanah/oneliner3-marathon/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

# oneliner3-marathon

My submission to the [One-Liner Marathon on make.fun](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2): one joke, one line, no more than 280 characters, pitted against every other entry two at a time while a judge picks the bigger laugh.

## The joke

Running `main.ts` produces `/output/entry.txt` holding exactly this line, with no newline after it:

> I told my AI assistant to act more human. It started ignoring my messages.

Why this one: the setup asks for something everyone wants from an assistant, and the punchline delivers the most human behaviour of all — going silent. It lands on the first read and still holds up on the second, because the joke is really about us, not the machine.

## Running it

    node main.ts

It writes to `$MAKEFUN_OUTPUT_DIR` if that variable is set, and to `/output` if it is not.
