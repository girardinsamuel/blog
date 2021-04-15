---
title: Test Code Block
description: "test blocks"
tags: test
---

# Hello

```python
from src.masonite.app import App

from src.masonite.wsgi import response_handler
from src.masonite.helpers import config
from src.masonite.environment import LoadEnvironment

"""Instantiate Container And Perform Important Bindings
Some Service providers need important bindings like the WSGI application
and the application configuration file before they boot.
"""
```

<code-block>
from src.masonite.app import App

from src.masonite.wsgi import response_handler
from src.masonite.helpers import config
from src.masonite.environment import LoadEnvironment

"""Instantiate Container And Perform Important Bindings
Some Service providers need important bindings like the WSGI application
and the application configuration file before they boot.
"""

LoadEnvironment()

container = App()

container.bind('WSGI', response_handler)
container.bind('Container', container)

container.bind('Providers', [])
container.bind('WSGIProviders', [])
</code-block>
