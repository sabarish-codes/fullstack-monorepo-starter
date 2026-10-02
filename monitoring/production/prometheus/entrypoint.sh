#!/bin/sh

set -eu

sed "s|\${API_HOST}|${API_HOST}|g" \
  /etc/prometheus/prometheus.template.yml \
  > /tmp/prometheus.yml

exec /bin/prometheus \
  --config.file=/tmp/prometheus.yml \
  --storage.tsdb.path=/prometheus