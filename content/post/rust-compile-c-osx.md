---
title: "Compiling C dependencies for Rust and node-gyp on MacOSX Catalina"
date: 2020-03-18T23:03:28+02:00
tags: [ "rust", "compiling", "c", "dependencies", "osx", "catalina"]
draft: false
---


## Quick story first. 

    A weed smoker died. He did bad things during his life and was sent to hell. Arriving there, he saw an endless field of plants (marijuana) and in the middle, sitting there, Jimmy Hendrix and Bob Marley, rolling a massive join. 

    He ran towards them and say: - "Hi, big fan, quick question. I thought this was going to be hell! But with all that weed, I must be in heaven. Can we smoke some together?"
    Hendrix asks, "Got a lighter ?" 
    Smoker replied, "No."
    Marley says, "See, man, this is hell".

I don't smoke weed. I don't even drink alcohol. My addiction is trying GitHub projects.
So I wanted to try a Rust project that I use daily on a freshly installed OSX. 
Clone, change dir, `cargo build`.
And this is what hell looks like for me:

```
error: failed to run custom build command for `libz-sys v1.0.25`

Caused by:
  process didn't exit successfully: `/Users/julien/code/rust/starship/target/debug/build/libz-sys-42a4bb72600da88a/build-script-build` (exit code: 1)
--- stdout
cargo:rerun-if-env-changed=LIBZ_SYS_STATIC
cargo:rerun-if-changed=build.rs
OPT_LEVEL = Some("0")
TARGET = Some("x86_64-apple-darwin")
HOST = Some("x86_64-apple-darwin")
CC_x86_64-apple-darwin = None
CC_x86_64_apple_darwin = None
HOST_CC = None
CC = None
CFLAGS_x86_64-apple-darwin = None
CFLAGS_x86_64_apple_darwin = None
HOST_CFLAGS = None
CFLAGS = None
CRATE_CC_NO_DEFAULTS = None
DEBUG = Some("true")
CARGO_CFG_TARGET_FEATURE = Some("fxsr,sse,sse2,sse3,ssse3")
running "cc" "src/smoke.c" "-o" "/dev/null" "-lz"
running: "cc" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-g" "-fno-omit-frame-pointer" "-m64" "-I" "src/zlib" "-fvisibility=hidden" "-DSTDC" "-D_LARGEFILE64_SOURCE" "-D_POSIX_SOURCE" "-o" "/Users/julien/code/rust/starship/target/debug/build/libz-sys-fd27be55bdb5100e/out/build/src/zlib/compress.o" "-c" "src/zlib/compress.c"
running: "cc" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-g" "-fno-omit-frame-pointer" "-m64" "-I" "src/zlib" "-fvisibility=hidden" "-DSTDC" "-D_LARGEFILE64_SOURCE" "-D_POSIX_SOURCE" "-o" "/Users/julien/code/rust/starship/target/debug/build/libz-sys-fd27be55bdb5100e/out/build/src/zlib/adler32.o" "-c" "src/zlib/adler32.c"
cargo:warning=In file included from src/zlib/compress.c:9:
cargo:warning=In file included from src/zlib/zlib.h:34:
cargo:warning=src/zlib/zconf.h:444:14: fatal error: 'sys/types.h' file not found
cargo:warning=#    include <sys/types.h>      /* for off_t */
cargo:warning=             ^~~~~~~~~~~~~
cargo:warning=1 error generated.
cargo:warning=In file included from src/zlib/adler32.c:8:
cargo:warning=In file included from src/zlib/zutil.h:22:
cargo:warning=In file included from src/zlib/zlib.h:34:
cargo:warning=src/zlib/zconf.h:444:14: fatal error: 'sys/types.h' file not found
cargo:warning=#    include <sys/types.h>      /* for off_t */
cargo:warning=             ^~~~~~~~~~~~~
exit code: 1
running: "cc" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-g" "-fno-omit-frame-pointer" "-m64" "-I" "src/zlib" "-fvisibility=hidden" "-DSTDC" "-D_LARGEFILE64_SOURCE" "-D_POSIX_SOURCE" "-o" "/Users/julien/code/rust/starship/target/debug/build/libz-sys-fd27be55bdb5100e/out/build/src/zlib/crc32.o" "-c" "src/zlib/crc32.c"
cargo:warning=1 error generated.
exit code: 1
cargo:warning=In file included from src/zlib/crc32.c:31:
cargo:warning=In file included from src/zlib/zutil.h:22:
cargo:warning=In file included from src/zlib/zlib.h:34:
cargo:warning=src/zlib/zconf.h:444:14: fatal error: 'sys/types.h' file not found
cargo:warning=#    include <sys/types.h>      /* for off_t */
cargo:warning=             ^~~~~~~~~~~~~
cargo:warning=1 error generated.
exit code: 1

--- stderr
src/smoke.c:1:10: fatal error: 'zlib.h' file not found
#include <zlib.h>
         ^~~~~~~~
1 error generated.


error occurred: Command "cc" "-O0" "-ffunction-sections" "-fdata-sections" "-fPIC" "-g" "-fno-omit-frame-pointer" "-m64" "-I" "src/zlib" "-fvisibility=hidden" "-DSTDC" "-D_LARGEFILE64_SOURCE" "-D_POSIX_SOURCE" "-o" "/Users/julien/code/rust/starship/target/debug/build/libz-sys-fd27be55bdb5100e/out/build/src/zlib/adler32.o" "-c" "src/zlib/adler32.c" with args "cc" did not execute successfully (status code exit code: 1).


warning: build failed, waiting for other jobs to finish...
error: build failed
```

I've had my fare share of C/C++ compiling errors 15 years ago using Gentoo. 
So by reflex, search the internet with the error message: Nothing.
And that's hell. It means, it is my environment and I'm missing some dependencies. 

I check `brew info zlib` and 
```
==> Caveats
zlib is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.
```

It doesn't look good. 

I searched and searched for a ridiculous amount of hours.
Trying nightly versions of Rust, different targets, changing dependencies version, trying to build others Rust projects.
All failed.

I gave up for the day when I caught myself looking at forum threads from 2012. I felt like being an archeologist mixed with an historian. This has gone too far. Taking a break.

## Sometimes, you just can't let it go

Still griding at the back of my mind is that compile error. Then I remembered, when in doubt, on OSX, install the full version (9 GB) of XCode to the latest version. I'm sure this will be a common experience for most projects in any language or platform in 2025, if we survive the ripple of COVID-19, that is. Trying and re-trying `xcode-select --install` (the lightweight version of XCode) did not change anything. 

I just wanted the banana and got the gorilla holding the banana with the whole jungle. 

Let's try to compile a C program `a.c`.

```
#include<stdio.h>
int main(void){
 printf("Hello world\n");
 return 0;
}
```
Running `gcc -o a a.c` works perfectly.
Running `make a` throw this error:

```
cc     a.c   -o a
a.c:1:9: fatal error: 'stdio.h' file not found
#include<stdio.h>
        ^~~~~~~~~
1 error generated.
make: *** [a] Error 1
```

## Ok, we're getting somewhere.

I returned to build the Rust program with different flags to no avail.

I gave up and went back to a Node.js project. 
Change dir, `npm install`. 
I wonder if there is a competition I don't know about, to see who has the most dependencies.
And hell is there again:

```
❯ npm install

> fsevents@1.2.11 install /Users/julien/code/awesome-docker/node_modules/fsevents
> node-gyp rebuild

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
In file included from ../fsevents.cc:6:
In file included from ../../nan/nan.h:53:
In file included from /Users/julien/Library/Caches/node-gyp/12.16.1/include/node/uv.h:52:
In file included from /Users/julien/Library/Caches/node-gyp/12.16.1/include/node/uv/errno.h:25:
/Library/Developer/CommandLineTools/usr/bin/../include/c++/v1/errno.h:32:15: fatal error: 'errno.h' file not found
#include_next <errno.h>
              ^~~~~~~~~
1 error generated.
make: *** [Release/obj.target/fse/fsevents.o] Error 1
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/Users/julien/.fnm/node-versions/v12.16.1/installation/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
gyp ERR! stack     at ChildProcess.emit (events.js:311:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Darwin 19.3.0
gyp ERR! command "/Users/julien/.fnm/node-versions/v12.16.1/installation/bin/node" "/Users/julien/.fnm/node-versions/v12.16.1/installation/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/julien/code/awesome-docker/node_modules/fsevents
gyp ERR! node -v v12.16.1
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 install: `node-gyp rebuild`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

audited 9680 packages in 7.655s

31 packages are looking for funding
  run `npm fund` for details

found 10 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

What did I do to deserve this? 
<!-- 
I even put my credit card number into iTunes, just to confirm that my account did not need a "special blessing" from the Apple spirits. I though that would unlock me to continue with my project. 
In most case, this usually does the trick but this time, unfortunately, it did not. -->

Ok let's look at node-gyp.

Nice, a special page dedicated to [Catalina](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)

Trying all the steps and debugging everything.

Nope. Still in hell.

Maybe I'm thinking about it all wrong. This is not Rust related, it is not node-gyp related, it is OSX Catalina related.

## The Answer

Stack overflow to the rescue:  

- https://stackoverflow.com/questions/52509602/cant-compile-c-program-on-a-mac-after-upgrade-to-mojave

- https://apple.stackexchange.com/questions/372032/usr-include-missing-on-macos-catalina-with-xcode-11

- https://apple.stackexchange.com/questions/372340/missing-header-files-on-macos-catalina



Finally, the answer was, the `CPATH`:

```shell
export CPATH="$(xcrun --show-sdk-path)/usr/include"  # bash, zsh
# or fish shell
set -x CPATH (xcrun --show-sdk-path)/usr/include 
````

Now everything compiles \o/

What is `CPATH`:

> CPATH specifies a list of directories to be searched as if specified with -I, but after any paths given with -I options on the command line. This environment variable is used regardless of which language is being preprocessed.

Source: http://gcc.gnu.org/onlinedocs/cpp/Environment-Variables.html

I'm going to remember that one. I hope it saves someone some pain.
