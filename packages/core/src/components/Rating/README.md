Star ratings:

```
<Rating rating={0} />
<Rating rating={0.5} />
<Rating rating={1} />
<Rating rating={1.5} />
<Rating rating={2} />
<Rating rating={2.5} />
<Rating rating={3} />
<Rating rating={3.5} />
<Rating rating={4} />
<Rating rating={4.5} />
<Rating rating={5} />
```

With reviews:

```
<Rating rating={4.5} reviews={100} />
```

With different sizing: micro, small, regular (default), and large.

```jsx
<Rating micro rating={3.5} reviews={100} />
<Rating small rating={3.5} reviews={100} />
<Rating rating={3.5} reviews={100} />
<Rating large rating={3.5} reviews={100} />
```
