# acf_clear_fields

1. Create some custom fields

2. One of the fields has to be the 'trigger'-feature. Which when klicked/changed/updated (alter the jquery event accordingly!) triggers the deletion of the unused ACF-fields for a certain object.

3. Add some conditions to some fields that should be shown/hidden

4. Now when activating the trigger field in the 'edit'-view of your object, an ajax call is sent which then deletes all fields that are currently hidden.

