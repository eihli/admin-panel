# Admin Panel

## Base Functionality

- Attach restaurant to user
- Add user
- Remove user
- Update password
- Change role
- Change seed votes
- Edit restaurant details
  - name
  - address
  - slug
  - status
  - geolocation

## Dashboard

  - # of restaurants in system
  - # claimed restaurants
  - map display of above
  - velocity/performance of sales
  - Avg # categories for menu

## Thoughts

- Feels like I'm relearning mongo from scratch. It's been longer and I forgot more than I thought.
- Spending a lot of time trying to debug the following error and considering generating a fake json data store just to make progress:
    { [MongoError: not authorized on disco to execute command { count: "category", query: {} }]
      name: 'MongoError',
      message: 'not authorized on disco to execute command { count: "category", query: {} }'
- If I generate fake data to make progress, the time it takes to replicate what's in the current database could probably be better spent working on a nicer front-end.