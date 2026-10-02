FROM prom/prometheus:v3.15.0

USER root

COPY prometheus.template.yml /etc/prometheus/prometheus.template.yml
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]