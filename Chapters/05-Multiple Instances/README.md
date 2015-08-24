#multiple Instances

Up till now we have been working with models as singletons. 
Assuming that only one instance of the model is all that is needed. Usually this *is* the case.

However, there are times when multiple instances are necessary.

This chapter will discuss how to create Model services that facilitate creating multiple instances of 
a model across a single session.

We will look at both Traditional Classical and functional style 