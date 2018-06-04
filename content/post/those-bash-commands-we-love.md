---
title: "💻 Those bash commands we love"
date: 2018-05-22T14:22:13+02:00
tags: ["terminal", "kubernetes", "docker", "bash", "automation"]
draft: false
---
# The era of the terminal

Looking back at the time of the mainframe with dummy terminal clients and their black/green screen, it makes me wonder if things really change that much. I guess it's like in everything, some things change, some don't. Deal with it.

If you spend a decent amount of time in a terminal, you might have realized that there are some tasks that are tedious and error prone such as copy pasting a super long string (ssh public key) or some pods name from a kubernetes cluster.
Those errors are wasting precious time that could be allocated to higher quest like indenting YAML in a manifest.

## Variables

The advantages of environment variables over arguments:

* order doesn't matter
* can be shared by more than one script
* it isn't stored anywhere (unless you keep your history)
* No code needed as opposed to a CLI made with Golang/Node.js/Python/...

> Notice that there is no space on each side of the '='

```bash
AWS_PROFILE=user2 aws ec2 describe-instances  \\
                  --instance-ids i-0787e4282810ef9cf \\
                  --query 'Reservations[0].Instances[0].PublicIpAddress'
# OUTPUT:
#"54.183.22.255"

## Or just to store things for later use
INTERNAL_IP=$(curl -s -H "Metadata-Flavor: Google" \
  http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip)
```

## Looping

```bash
# Loop over files in the current dir
for file in *; do echo "File -> $file"; done

# Do something at interval
 while true; do kubectl get pods; sleep 1; done

# Iterate over arguments
for var in "$@"
do
    echo "$var"
done

# same same but different by one
for i in 0 1 2; do
  gcloud compute routes create kubernetes-route-10-200-${i}-0-24 \
    --network kubernetes-the-hard-way \
    --next-hop-address 10.240.0.2${i} \
    --destination-range 10.200.${i}.0/24
done
```

Or in its own script:

```bash
#!/bin/bash
# Randomly delete pods in a Kubernetes namespace.
set -ex

: ${DELAY:=30}
: ${NAMESPACE:=default}

while true; do
  kubectl \
    --namespace "${NAMESPACE}" \
    -o 'jsonpath={.items[*].metadata.name}' \
    get pods | \
      tr " " "\n" | \
      shuf | \
      head -n 1 |
      xargs -t --no-run-if-empty \
        kubectl --namespace "${NAMESPACE}" delete pod
  sleep "${DELAY}"
done
```

## Evaluating

Sometimes we need to copy-paste the content of a file:

```bash
cat <<EOF | ~/newly_created_file
input
on multiple lines
EOF
```

Sometimes we need to have privileges:

```bash
cat <<EOF | sudo tee /etc/systemd/system/foo.service
[Unit]
Description=foo

[Service]
ExecStart=/bin/bash -c "while true; do /bin/inotifywait -qq --event close_write /sys/class/backlight/acpi_video0/brightness; su myusername -c '/bin/xbacklight -display :0 -set $(cat /sys/class/backlight/acpi_video0/brightness)'; done"

[Install]
WantedBy=multi-user.target
EOF
```

## Linting

* Install [shellcheck](https://www.shellcheck.net/)
* Run it against your scripts
* Fix everything

This is the most useful tool when it comes to finding bugs and to guide you to write better scripts.

## Useful

This part is just for those commands that we need once in while but can never really remember that they exist

```bash
# alias
alias c=clear

# The 20 most used command in your history
history | awk 'BEGIN {FS="[ \t]+|\\|"} {print $3}' | sort | uniq -c | sort -nr | head -n 20

# Remove all node_modules forlder recursively
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Copying file with rsync over ssh, very useful to resume the transfer!
rsync -avz -e ssh remoteuser@remotehost:/remote/dir /this/dir/

# exporting a container
docker export my_container | gzip > my_container.tar.gz

# execute last command with sudo
sudo !!

# get the directory of the script
CURRENT_DIR=$(dirname "$0")
```

## Sources

My favorite sources of inspiration:

{{< tweet 1000208860060307456 >}}

* [Bash in one video](https://www.youtube.com/watch?v=hwrnmQumtPw) 1h
* [the art of command line](https://github.com/jlevy/the-art-of-command-line)
* [NixCraft - Linux Shell Scripting Tutorial](https://bash.cyberciti.biz/guide/Main_Page)
* [kubernetes the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way)

Contact me to add your best bash tips here
