# The Heartbeat App

The Heartbeat app can be used to monitor ArangoDB. It makes an HTTP head request against an external URL on a regular basis. This heartbeat can be monitored with a watchdog timer like [WDT.io](https://wdt.io/). If the heartbeat stops, you'll get an alert letting you know that something is wrong with your database.

*Installation*

```bash
foxx-manager install foxx-heartbeat /<mountpoint> url='<URL that should receive the heartbeat>' interval=<how many seconds between beats>
```

*Example using WDT.io*

Let's say we want a heartbeat every 5 minutes. So we create a new inbound timer on [WDT.io](https://wdt.io/), name it *arangodb-heartbeat*, and set it to every-5 minutes with a tolerance of 1 minute. We'll get a unique URL that'll look something like `k.wdt.io/xyz/arangodb-heartbeat`.

Then we install the foxx app with:

```bash
foxx-manager install foxx-heartbeat /heartbeat url='http://k.wdt.io/xyz/arangodb-heartbeat' interval=300
```

The heartbeat will automatically start.

## Configuration

This app has the following configuration options:

* *url*: The URL that will get requested every heartbeat using an HTTP-Head request.
* *interval* (optional): The time between heartbeats in seconds. Default: *60*.

## License

This code is distributed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0) by Christian Pekeler.
