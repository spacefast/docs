---
title: "Error reference"
description: "Every Spacefast API error is a problem document with a stable code and a type URI linking to its reference page."
---

Every Spacefast API error is an RFC 9457 problem document (`application/problem+json`).
It carries a stable `code` and a `type` URI that links to one of the pages below. Match on
`code` in clients. The meaning of a `code` stays stable, while `detail` text can change.
Retired codes leave with the API that owns them.

There are 632 error codes in the registry.

| Code | Meaning |
| --- | --- |
| [`abuse_report_invalid_transition`](/errors/abuse_report_invalid_transition) | The abuse report cannot move to the requested status from its current status. |
| [`abuse_report_rate_limited`](/errors/abuse_report_rate_limited) | Too many abuse reports were submitted from this client in a short window. |
| [`abuse_takedown`](/errors/abuse_takedown) | This space was disabled by an abuse takedown and cannot be served or modified. |
| [`access_denied`](/errors/access_denied) | The authorization request was denied by the user. |
| [`account_suspended`](/errors/account_suspended) | This account is suspended for a policy or abuse violation and cannot be used. |
| [`agent_handoff_declined`](/errors/agent_handoff_declined) | The app-private agent handoff cannot be redeemed. |
| [`agent_handoff_limit_reached`](/errors/agent_handoff_limit_reached) | This user already has the maximum number of pending handoffs for the space. |
| [`agent_handoff_origin_unsupported`](/errors/agent_handoff_origin_unsupported) | The dashboard origin this deployment is configured with cannot mint canonical agent handoff links. |
| [`ambiguous_space_slug`](/errors/ambiguous_space_slug) | The slug matches spaces in more than one of your teams, so it cannot be resolved. |
| [`anonymous_expired`](/errors/anonymous_expired) | This anonymous space expired before it was claimed. |
| [`anonymous_publish_rate_limited`](/errors/anonymous_publish_rate_limited) | Too many anonymous publishes came from this network in a short window. |
| [`anonymous_space_limit_reached`](/errors/anonymous_space_limit_reached) | This client already holds the maximum number of unclaimed spaces. |
| [`api_key_scope_underivable`](/errors/api_key_scope_underivable) | A concrete access policy cannot be derived from the requested scope and permissions. |
| [`archive_too_large`](/errors/archive_too_large) | The uploaded archive exceeds the maximum allowed size. |
| [`auth_code_required`](/errors/auth_code_required) | An authorization code is required to complete this step. |
| [`authorization_level_not_allowed`](/errors/authorization_level_not_allowed) | This operation is reserved for a signed-in person, or the credential is acting at an authorization level the operation does not accept. |
| [`authorization_pending`](/errors/authorization_pending) | The device login is not approved yet. |
| [`blob_gate_record_missing`](/errors/blob_gate_record_missing) | The file behind this download link no longer exists. |
| [`blob_gate_token_invalid`](/errors/blob_gate_token_invalid) | The download token is invalid or expired. |
| [`build_command_missing`](/errors/build_command_missing) | A build or install command cannot be found during the build run. |
| [`build_execution_unavailable`](/errors/build_execution_unavailable) | Build execution is not available on this deployment. |
| [`build_failed`](/errors/build_failed) | The build run failed before producing a version. |
| [`build_install_failed`](/errors/build_install_failed) | The dependency install step failed during the build run. |
| [`build_no_index_html`](/errors/build_no_index_html) | The build produced output but no index.html at the site root. |
| [`build_not_created`](/errors/build_not_created) | The build cannot be created. |
| [`build_oom`](/errors/build_oom) | The build process was killed, most likely after running out of memory. |
| [`build_output_contains_server_bundle`](/errors/build_output_contains_server_bundle) | The build output contains a compiled server bundle (an OpenNext worker.js), which a file-only publish would expose as a public download. |
| [`build_output_dir_missing`](/errors/build_output_dir_missing) | The build finished but its output directory was not produced. |
| [`build_timeout`](/errors/build_timeout) | The build exceeded its time limit before producing a version. |
| [`cache_purge_domain_required`](/errors/cache_purge_domain_required) | A purge request must name the domain to purge. |
| [`cache_purge_path_required`](/errors/cache_purge_path_required) | A purge request must name at least one path. |
| [`catalog_unavailable`](/errors/catalog_unavailable) | The connector catalog could not be built right now. |
| [`channel_name_reserved`](/errors/channel_name_reserved) | The channel name collides with a reserved hostname suffix and cannot be used. |
| [`channel_pointer_moved`](/errors/channel_pointer_moved) | The channel was promoted to a different version since you read it. |
| [`channel_unsupported`](/errors/channel_unsupported) | This space does not support the requested channel. |
| [`claim_blocked_takedown`](/errors/claim_blocked_takedown) | This space is under an abuse takedown and cannot be claimed. |
| [`claim_target_not_found`](/errors/claim_target_not_found) | The team or account to claim the space into was not found. |
| [`cli_upgrade_required`](/errors/cli_upgrade_required) | This CLI version is too old to talk to the API safely. |
| [`config_file_too_large`](/errors/config_file_too_large) | The sf.jsonc configuration file exceeds the maximum size. |
| [`config_functions_key_removed`](/errors/config_functions_key_removed) | The sf.jsonc configuration still uses the removed top-level functions key. |
| [`config_invalid`](/errors/config_invalid) | The space configuration failed validation. |
| [`config_meta_too_long`](/errors/config_meta_too_long) | A meta field in the space configuration exceeds its maximum length. |
| [`config_name_too_long`](/errors/config_name_too_long) | The name in the space configuration exceeds its maximum length. |
| [`config_runtime_entry_missing`](/errors/config_runtime_entry_missing) | The declared runtime has no entry module to compile. |
| [`config_runtime_invalid_kind`](/errors/config_runtime_invalid_kind) | The runtime block in the space configuration declares an unknown kind. |
| [`config_templates_over_limit`](/errors/config_templates_over_limit) | The configuration declares more template files than the plan allows. |
| [`confirmation_denied`](/errors/confirmation_denied) | A person reviewed this exact action and denied it. The denial is terminal. |
| [`confirmation_expired`](/errors/confirmation_expired) | The confirmation for this action expired before a person decided it. |
| [`confirmation_mismatch`](/errors/confirmation_mismatch) | The continuation token is bound to different action terms or a different resource revision than the request presenting it. |
| [`confirmation_required`](/errors/confirmation_required) | This action destroys live content or spends money, so a person must approve this exact action before it runs. |
| [`confirmation_token_required`](/errors/confirmation_token_required) | This exact action already has a decision, and a retry without its continuation token cannot clear the gate. |
| [`connection_ambiguous`](/errors/connection_ambiguous) | The connector has more than one connection you can use, so the call did not name one. |
| [`connection_forbidden`](/errors/connection_forbidden) | This credential is not granted the connection it tried to use. |
| [`connection_needs_reauth`](/errors/connection_needs_reauth) | The stored credential expired or was revoked at the provider. |
| [`connection_not_found`](/errors/connection_not_found) | No connection exists with this id, or this credential cannot see it. |
| [`connection_revoked`](/errors/connection_revoked) | This connection was disconnected and its credential was purged. |
| [`connection_serving_not_granted`](/errors/connection_serving_not_granted) | This team connection has not been granted site serving access. |
| [`connector_approval_required`](/errors/connector_approval_required) | The call needs a person to approve it before it runs. |
| [`connector_first_party_immutable`](/errors/connector_first_party_immutable) | This connector is built into Spacefast and cannot be edited or removed. |
| [`connector_not_found`](/errors/connector_not_found) | No connector exists with this slug for this team. |
| [`connector_role_unknown`](/errors/connector_role_unknown) | The live capsule does not declare this connector role. |
| [`connector_run_budget_exhausted`](/errors/connector_run_budget_exhausted) | The run hit its tool-call, egress, or time budget and stopped. |
| [`connector_run_not_found`](/errors/connector_run_not_found) | No run exists with this id, or this credential cannot see it. |
| [`connector_run_not_resumable`](/errors/connector_run_not_resumable) | The run already settled, or its approval expired. |
| [`connector_serving_admin_only`](/errors/connector_serving_admin_only) | Only team owners and admins can change serving grants. |
| [`connector_serving_not_allowlisted`](/errors/connector_serving_not_allowlisted) | This connector is not allowed to serve sites. |
| [`connector_slug_taken`](/errors/connector_slug_taken) | This team already has a connector with that slug. |
| [`connector_source_blocked`](/errors/connector_source_blocked) | The source URL points somewhere the egress guard refuses to fetch. |
| [`connector_source_unreachable`](/errors/connector_source_unreachable) | The spec or endpoint could not be fetched. |
| [`connector_tool_blocked`](/errors/connector_tool_blocked) | A policy rule blocks this tool for this caller. |
| [`connector_write_in_read_handler`](/errors/connector_write_in_read_handler) | Read handlers can only call read-only connector tools. |
| [`continuation_unavailable`](/errors/continuation_unavailable) | This space key can no longer be exchanged for an API key. |
| [`continuation_used`](/errors/continuation_used) | This space key was already exchanged for a durable API key. |
| [`credential_expired`](/errors/credential_expired) | The credential used for this request is expired. |
| [`credential_not_yet_valid`](/errors/credential_not_yet_valid) | The credential is not valid yet because its start time is in the future. |
| [`credential_retired`](/errors/credential_retired) | This request used a retired Spacefast token format or authentication header. |
| [`credential_revoked`](/errors/credential_revoked) | The credential used for this request was revoked. |
| [`credential_sponsor_inactive`](/errors/credential_sponsor_inactive) | The person who authorized this machine credential is no longer an active member of the team it acts for. |
| [`cron_not_found`](/errors/cron_not_found) | The live version declares no scheduled job with that key or path. |
| [`cron_run_unreachable`](/errors/cron_run_unreachable) | The space never answered the on-demand cron request before the timeout. |
| [`csam_blocked`](/errors/csam_blocked) | The content was blocked because it matched known child sexual abuse material. |
| [`csam_policy_floor`](/errors/csam_policy_floor) | CSAM enforcement policy cannot be set below the mandatory account-suspend floor. |
| [`dashboard_prefs_key_invalid`](/errors/dashboard_prefs_key_invalid) | A dashboard preference key is empty or longer than the 64-character limit. |
| [`dashboard_prefs_too_large`](/errors/dashboard_prefs_too_large) | The merged dashboard preferences would exceed the 16KB serialized size limit. |
| [`dashboard_prefs_too_many_keys`](/errors/dashboard_prefs_too_many_keys) | The merged dashboard preferences would hold more than the 50 allowed keys. |
| [`data_location_immutable`](/errors/data_location_immutable) | This request tried to change data location through an immutable path. |
| [`db_not_available`](/errors/db_not_available) | The live version has no database to read. |
| [`decision_execution_lost`](/errors/decision_execution_lost) | The approved action's execution lease is no longer held, so its result cannot be recorded. |
| [`decision_in_progress`](/errors/decision_in_progress) | This approved action is already executing. |
| [`device_authorization_failed`](/errors/device_authorization_failed) | The device login request failed and cannot be completed. |
| [`device_verification_rate_limited`](/errors/device_verification_rate_limited) | Too many incorrect device codes were entered in a short window. |
| [`dns_control_observation_indeterminate`](/errors/dns_control_observation_indeterminate) | The domain check could not finish because a DNS or HTTP probe did not answer. |
| [`dns_export_required`](/errors/dns_export_required) | This operation requires exporting the current DNS records first. |
| [`dns_field_conflict`](/errors/dns_field_conflict) | Two DNS fields cannot be used together for this provider or record type. |
| [`dns_field_not_applicable`](/errors/dns_field_not_applicable) | The DNS field is not writable for this provider, record type, or management mode. |
| [`dns_import_partial_visibility`](/errors/dns_import_partial_visibility) | The DNS import cannot see the full zone, so importing would lose records. |
| [`dns_provider_auth_expired`](/errors/dns_provider_auth_expired) | The connected DNS provider authorization expired or was revoked. |
| [`dns_provider_batch_unsupported`](/errors/dns_provider_batch_unsupported) | The connected DNS provider cannot apply this batch with the required semantics. |
| [`dns_provider_change_pending`](/errors/dns_provider_change_pending) | The DNS provider accepted the change but propagation or provider completion is still pending. |
| [`dns_provider_conflict`](/errors/dns_provider_conflict) | The DNS provider rejected the change because it conflicts with existing provider state. |
| [`dns_provider_connection_in_use`](/errors/dns_provider_connection_in_use) | The DNS provider connection is still attached to one or more zones. |
| [`dns_provider_connection_unavailable`](/errors/dns_provider_connection_unavailable) | The DNS provider connection cannot currently be used. |
| [`dns_provider_controlled_desired_state`](/errors/dns_provider_controlled_desired_state) | This DNS provider is controlled through desired-state templates instead of direct record edits. |
| [`dns_provider_credentials_expired`](/errors/dns_provider_credentials_expired) | The DNS provider credentials are expired or revoked. |
| [`dns_provider_feature_descriptors`](/errors/dns_provider_feature_descriptors) | This provider exposes domain features through capability descriptors. |
| [`dns_provider_feature_unavailable`](/errors/dns_provider_feature_unavailable) | The requested DNS provider field or feature is not available for this zone. |
| [`dns_provider_field_unsupported`](/errors/dns_provider_field_unsupported) | The DNS provider does not support one of the requested record fields. |
| [`dns_provider_future_authoritative_backend`](/errors/dns_provider_future_authoritative_backend) | This domain uses a future Spacefast authoritative DNS backend adapter. |
| [`dns_provider_missing_permission`](/errors/dns_provider_missing_permission) | The connected DNS provider account lacks the required permission. |
| [`dns_provider_not_connected`](/errors/dns_provider_not_connected) | This domain has no connected DNS provider zone. |
| [`dns_provider_operation_failed`](/errors/dns_provider_operation_failed) | The DNS provider operation failed before the requested change was accepted. |
| [`dns_provider_permission_denied`](/errors/dns_provider_permission_denied) | The connected DNS provider denied permission for this zone or action. |
| [`dns_provider_rate_limited`](/errors/dns_provider_rate_limited) | The DNS provider rate-limited the requested operation. |
| [`dns_provider_replace_all_requires_fresh_plan`](/errors/dns_provider_replace_all_requires_fresh_plan) | This provider requires a fresh full-zone plan before replacing DNS records. |
| [`dns_provider_replace_all_write_strategy`](/errors/dns_provider_replace_all_write_strategy) | This provider applies DNS changes with a replace-all write strategy. |
| [`dns_provider_snapshot_stale`](/errors/dns_provider_snapshot_stale) | The cached DNS provider snapshot is stale. |
| [`dns_provider_snapshot_unavailable`](/errors/dns_provider_snapshot_unavailable) | Spacefast cannot cache the latest DNS provider snapshot. |
| [`dns_provider_temporarily_unavailable`](/errors/dns_provider_temporarily_unavailable) | The DNS provider is rate-limited, degraded, or temporarily unavailable. |
| [`dns_provider_timeout`](/errors/dns_provider_timeout) | The DNS provider did not accept the change within the bounded wait. |
| [`dns_provider_validation_failed`](/errors/dns_provider_validation_failed) | The DNS provider rejected the submitted record data. |
| [`dns_provider_workflow_templates`](/errors/dns_provider_workflow_templates) | This provider exposes setup through workflow templates instead of low-level DNS edits. |
| [`dns_provider_zone_not_found`](/errors/dns_provider_zone_not_found) | The connected DNS provider zone cannot be found. |
| [`dns_record_conflicts_with_managed`](/errors/dns_record_conflicts_with_managed) | The DNS change conflicts with a record Spacefast manages for this domain. |
| [`dns_record_managed`](/errors/dns_record_managed) | This DNS record is managed by Spacefast and cannot be edited directly. |
| [`dns_record_not_found`](/errors/dns_record_not_found) | The DNS record was not found in this zone. |
| [`domain_already_exists`](/errors/domain_already_exists) | This domain is already present in your inventory. |
| [`domain_bound`](/errors/domain_bound) | The domain is currently bound to a space, which blocks this operation. |
| [`domain_facet_already_managed`](/errors/domain_facet_already_managed) | This facet of the domain is already managed by Spacefast. |
| [`domain_facet_external`](/errors/domain_facet_external) | This facet of the domain is managed outside Spacefast. |
| [`domain_facet_not_applicable`](/errors/domain_facet_not_applicable) | The requested facet does not apply to this domain. |
| [`domain_in_use`](/errors/domain_in_use) | The domain is in use by another binding or assignment. |
| [`domain_lookup_rate_limited`](/errors/domain_lookup_rate_limited) | Too many domain lookups were made in a short window. |
| [`domain_not_bound`](/errors/domain_not_bound) | The domain is not bound to this space. |
| [`domain_primary_redirect_conflict`](/errors/domain_primary_redirect_conflict) | A redirecting domain cannot be the primary domain. |
| [`domain_quota_exceeded`](/errors/domain_quota_exceeded) | Adding this domain would exceed the plan's external domain allowance. |
| [`domain_registration_active`](/errors/domain_registration_active) | The domain has an active registration, which blocks this operation. |
| [`domain_registration_not_renewable`](/errors/domain_registration_not_renewable) | The domain registration cannot be renewed right now. |
| [`domain_reserved_suffix`](/errors/domain_reserved_suffix) | The hostname is under a Spacefast-managed suffix and cannot be added as a domain. |
| [`domain_transfer_active`](/errors/domain_transfer_active) | The domain has a transfer in progress, which blocks this operation. |
| [`domain_wildcard_label`](/errors/domain_wildcard_label) | The hostname uses a wildcard label in a position that is not allowed. |
| [`domain_wildcard_not_enabled`](/errors/domain_wildcard_not_enabled) | Wildcard hostnames are not enabled for this domain or plan. |
| [`download_required`](/errors/download_required) | This content is too large to return inline and must be downloaded. |
| [`duplicate_version_path`](/errors/duplicate_version_path) | The version upload declares the same file path twice. |
| [`edge_logs_truncated`](/errors/edge_logs_truncated) | The edge log query reached the provider's result limit. |
| [`elevation_denied`](/errors/elevation_denied) | The person denied the temporary access request. |
| [`elevation_not_required`](/errors/elevation_not_required) | The grant already includes every scope the elevation asked for. |
| [`elevation_required`](/errors/elevation_required) | A person must approve temporary access before the agent can continue. |
| [`email_already_claimed`](/errors/email_already_claimed) | That email address is already verified on an account. |
| [`email_verification_code_invalid`](/errors/email_verification_code_invalid) | The emailed confirmation code is wrong, expired, or already used. |
| [`enforcement_policy_overlap`](/errors/enforcement_policy_overlap) | Enforcement policy severity ranges overlap within a category. |
| [`event_payload_too_large`](/errors/event_payload_too_large) | The event payload exceeds the maximum size. |
| [`event_rate_limited`](/errors/event_rate_limited) | Too many event submissions came from this client in a short window. |
| [`expired_token`](/errors/expired_token) | The token is expired. |
| [`feature_unavailable`](/errors/feature_unavailable) | This feature is not available on this deployment or plan. |
| [`files_mode_does_not_support_spa`](/errors/files_mode_does_not_support_spa) | SPA fallback cannot be combined with files-listing mode. |
| [`forbidden`](/errors/forbidden) | The credential is valid but does not allow this action. |
| [`frame_link_inactive`](/errors/frame_link_inactive) | The Frame Link is revoked, expired, not yet active, or out of uses. |
| [`frame_path_outside_link_resources`](/errors/frame_path_outside_link_resources) | The requested Frame path is outside the Link's resource set. |
| [`frame_principal_required`](/errors/frame_principal_required) | A Frame launch needs a signed-in account session, not an API token. |
| [`frame_session_invalid`](/errors/frame_session_invalid) | The Frame session proof is invalid for this Space or Link. |
| [`frame_session_stale`](/errors/frame_session_stale) | The Frame Link changed after this session was launched. |
| [`frame_session_target_changed`](/errors/frame_session_target_changed) | The server-owned Frame serving target changed after launch. |
| [`frame_target_fixed`](/errors/frame_target_fixed) | The request tried to override a Frame Link with a fixed serving target. |
| [`frame_version_required`](/errors/frame_version_required) | An all-Versions Frame Link requires one explicit immutable Version. |
| [`free_external_proxy_disabled`](/errors/free_external_proxy_disabled) | Proxy routes to external upstreams do not serve on an unclaimed Space. |
| [`hostname_contested`](/errors/hostname_contested) | The hostname this Space would serve on is already attached to a different site. |
| [`human_approval_required`](/errors/human_approval_required) | This run was parked for a person, so an agent's decision cannot settle it. |
| [`idempotency_conflict_in_progress`](/errors/idempotency_conflict_in_progress) | Another request with the same Idempotency-Key is still in flight. |
| [`idempotency_key_reused`](/errors/idempotency_key_reused) | The Idempotency-Key was reused with a different request body. |
| [`incumbent_controls_dns`](/errors/incumbent_controls_dns) | Another team controls this domain's DNS, so the operation is blocked. |
| [`ingest_admission_exceeded`](/errors/ingest_admission_exceeded) | Too many concurrent uploads for this space. |
| [`inject_invalid`](/errors/inject_invalid) | The inject config key is malformed. |
| [`inject_snippet_too_large`](/errors/inject_snippet_too_large) | An inject snippet exceeds the per-snippet size limit. |
| [`insufficient_scope`](/errors/insufficient_scope) | The credential authenticated, but its granted scopes do not include a set this operation accepts. |
| [`internal_error`](/errors/internal_error) | Something went wrong on our side. |
| [`invalid_claim_token`](/errors/invalid_claim_token) | The space key is invalid or does not match this space. |
| [`invalid_continuation_token`](/errors/invalid_continuation_token) | The continuation token is invalid, expired, or already finished. |
| [`invalid_data_location`](/errors/invalid_data_location) | The requested data location is not a supported region. |
| [`invalid_decision_state`](/errors/invalid_decision_state) | The decision record is in a state this endpoint cannot interpret. |
| [`invalid_device_code`](/errors/invalid_device_code) | The device code is invalid or expired. |
| [`invalid_domain`](/errors/invalid_domain) | The domain reference is invalid. |
| [`invalid_domain_name`](/errors/invalid_domain_name) | The domain name is not a valid registrable hostname. |
| [`invalid_elevation_request`](/errors/invalid_elevation_request) | An elevation request needs at least one scope and a rationale of 1 to 1024 characters. |
| [`invalid_file_path`](/errors/invalid_file_path) | A file path in the request is not a valid space path. |
| [`invalid_grant`](/errors/invalid_grant) | The authorization grant is invalid or was already used. |
| [`invalid_idempotency_key`](/errors/invalid_idempotency_key) | The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal. |
| [`invalid_publish_archive`](/errors/invalid_publish_archive) | The uploaded archive cannot be read as a valid zip. |
| [`invalid_publish_path`](/errors/invalid_publish_path) | A file path in the publish payload is not allowed. |
| [`invalid_publish_payload`](/errors/invalid_publish_payload) | The publish payload is malformed. |
| [`invalid_request`](/errors/invalid_request) | The request is malformed. |
| [`invalid_runtime_event`](/errors/invalid_runtime_event) | The runtime event payload is not recognized. |
| [`invalid_space`](/errors/invalid_space) | The space reference is invalid. |
| [`invalid_space_mode`](/errors/invalid_space_mode) | The requested space serving mode is not supported. |
| [`invalid_usage_bucket`](/errors/invalid_usage_bucket) | The usage bucket has an invalid time range. |
| [`invalid_usage_correction`](/errors/invalid_usage_correction) | The correction does not match the original usage record. |
| [`invalid_usage_window`](/errors/invalid_usage_window) | The requested usage window is invalid or longer than 92 days. |
| [`invalid_user_code`](/errors/invalid_user_code) | The user code does not match a pending device login. |
| [`invalid_version_path`](/errors/invalid_version_path) | A file path in the version is not a valid space path. |
| [`invalid_webhook_events`](/errors/invalid_webhook_events) | One or more webhook event codes are not in the event taxonomy. |
| [`invalid_webhook_payload`](/errors/invalid_webhook_payload) | The webhook configuration payload is malformed. |
| [`invalid_webhook_signature`](/errors/invalid_webhook_signature) | The webhook signature did not verify. |
| [`invalid_webhook_url`](/errors/invalid_webhook_url) | The webhook URL is not an allowed public HTTPS endpoint. |
| [`invalid_zero_realtime_event`](/errors/invalid_zero_realtime_event) | The Zero realtime event payload is malformed or scoped to the wrong space. |
| [`invalid_zero_realtime_replay_query`](/errors/invalid_zero_realtime_replay_query) | The Zero realtime replay query parameters are invalid. |
| [`invitation_already_exists`](/errors/invitation_already_exists) | An invitation for this email already exists on the team. |
| [`invitation_email_mismatch`](/errors/invitation_email_mismatch) | This invitation was addressed to a different email than the accepting user. |
| [`invitation_expired`](/errors/invitation_expired) | The invitation is expired and can no longer be accepted. |
| [`invitation_not_pending`](/errors/invitation_not_pending) | The invitation is no longer pending. |
| [`ip_blocked`](/errors/ip_blocked) | Requests from this IP address are blocked for abuse or policy reasons. |
| [`issuer_exists`](/errors/issuer_exists) | This partner token issuer is already active for another tenant. |
| [`issuer_not_active`](/errors/issuer_not_active) | The partner token issuer is registered but is not active. |
| [`issuer_proof_invalid`](/errors/issuer_proof_invalid) | The partner token issuer key-possession proof is invalid. |
| [`issuer_tenant_occupied`](/errors/issuer_tenant_occupied) | This tenant already has a pending or active partner token issuer. |
| [`issuer_unknown`](/errors/issuer_unknown) | The partner token names an issuer that Spacefast does not recognize. |
| [`jetpack_attachment_pending`](/errors/jetpack_attachment_pending) | Jetpack has not confirmed the license attachment. |
| [`jetpack_configuration_required`](/errors/jetpack_configuration_required) | Jetpack credentials are missing for an existing license operation. |
| [`jetpack_issuance_changed`](/errors/jetpack_issuance_changed) | The pending purchase changed after the recovery request was prepared. |
| [`jetpack_issuance_not_pending`](/errors/jetpack_issuance_not_pending) | This product has no unresolved Jetpack purchase. |
| [`jetpack_issuance_unresolved`](/errors/jetpack_issuance_unresolved) | A Jetpack purchase has no confirmed receipt. |
| [`jetpack_licensing_rejected`](/errors/jetpack_licensing_rejected) | The Jetpack Licensing API refused the request. |
| [`jetpack_licensing_response_invalid`](/errors/jetpack_licensing_response_invalid) | The Jetpack Licensing API returned an unexpected response. |
| [`jetpack_licensing_unavailable`](/errors/jetpack_licensing_unavailable) | The Jetpack Licensing API did not complete the request. |
| [`jetpack_recovery_license_mismatch`](/errors/jetpack_recovery_license_mismatch) | The supplied license does not match this pending purchase. |
| [`jetpack_recovery_license_owned`](/errors/jetpack_recovery_license_owned) | Another space already owns the supplied license. |
| [`jetpack_revocation_pending`](/errors/jetpack_revocation_pending) | Jetpack has not confirmed the license revocation. |
| [`jetpack_space_not_deleting`](/errors/jetpack_space_not_deleting) | License cleanup requires a space marked for deletion. |
| [`job_not_found`](/errors/job_not_found) | The background job was not found. |
| [`job_not_promotable`](/errors/job_not_promotable) | The job cannot be promoted in its current state. |
| [`job_not_removable`](/errors/job_not_removable) | The job cannot be removed in its current state. |
| [`job_not_retryable`](/errors/job_not_retryable) | The job cannot be retried in its current state. |
| [`label_limit_reached`](/errors/label_limit_reached) | The team already has the maximum number of labels. |
| [`label_name_taken`](/errors/label_name_taken) | Another label in this team already uses that name, ignoring case. |
| [`label_team_mismatch`](/errors/label_team_mismatch) | The label belongs to a different team than the space. |
| [`last_owner`](/errors/last_owner) | The last owner of a team cannot be removed or downgraded. |
| [`log_retention_clamped`](/errors/log_retention_clamped) | The requested log range exceeds the plan's retention and was clamped. |
| [`lost_domain_control`](/errors/lost_domain_control) | Spacefast no longer observes DNS control for this domain. |
| [`maintenance_in_progress`](/errors/maintenance_in_progress) | This change is temporarily unavailable while maintenance finishes. |
| [`malformed_policy_pattern`](/errors/malformed_policy_pattern) | The policy pattern is not a valid tool-address pattern. |
| [`malformed_tool_address`](/errors/malformed_tool_address) | The tool address is not `<connectionId>/<tool>`. |
| [`malware_detected`](/errors/malware_detected) | Malware was detected in the uploaded content. |
| [`managed_domain_protected`](/errors/managed_domain_protected) | This is a system-managed view.fast hostname and cannot be mutated like a custom domain. |
| [`manifest_body_too_large`](/errors/manifest_body_too_large) | The upload manifest body exceeds the maximum size. |
| [`manifest_duplicate_path`](/errors/manifest_duplicate_path) | The upload manifest declares the same path more than once. |
| [`manifest_too_many_files`](/errors/manifest_too_many_files) | The upload manifest declares more files than the allowed ceiling. |
| [`member_already_exists`](/errors/member_already_exists) | This user is already a member of the team. |
| [`method_not_allowed`](/errors/method_not_allowed) | The requested HTTP method is not supported for this endpoint. |
| [`missing_route_param`](/errors/missing_route_param) | A required route parameter is missing from the request path. |
| [`move_target_capacity_lost`](/errors/move_target_capacity_lost) | The selected move target no longer has capacity for the space. |
| [`name_managed_by_config`](/errors/name_managed_by_config) | The space name is managed by sf.jsonc while its live version declares one. |
| [`nameserver_delegation_required`](/errors/nameserver_delegation_required) | This operation requires the domain to be delegated to Spacefast nameservers. |
| [`nameserver_divergence`](/errors/nameserver_divergence) | The domain's observed nameservers diverge from the expected set. |
| [`next_package_layout_unsupported`](/errors/next_package_layout_unsupported) | Automatic Next.js builds do not support Yarn `Plug'n'Play`. |
| [`next_version_unsupported`](/errors/next_version_unsupported) | This Next.js version is incompatible with the bundled server runtime adapter. |
| [`no_space_selected`](/errors/no_space_selected) | The command needs a Space and this directory does not select one. |
| [`noop_publish`](/errors/noop_publish) | The publish matched the live version exactly, so nothing changed. |
| [`not_enrolled`](/errors/not_enrolled) | This account is not enrolled in the private beta, so the API cannot be used yet. |
| [`not_found`](/errors/not_found) | The requested resource was not found. |
| [`owner_binding_requires_private_space`](/errors/owner_binding_requires_private_space) | Owner connections require a private Space. |
| [`partner_preset_not_grantable`](/errors/partner_preset_not_grantable) | The `partner_admin` preset is a tenant-rooted partner credential and cannot be minted as an ordinary team API key. |
| [`partner_tenant_immutable_client`](/errors/partner_tenant_immutable_client) | The tenant's provider client cannot be changed. |
| [`password_already_set`](/errors/password_already_set) | The account already has a password. |
| [`password_compromised`](/errors/password_compromised) | The password appears in a public breach corpus. |
| [`path_case_collision`](/errors/path_case_collision) | Two file paths differ only by letter case, which collides on serving. |
| [`path_too_long`](/errors/path_too_long) | A file path exceeds the maximum length. |
| [`plan_grant_already_active`](/errors/plan_grant_already_active) | The team already holds an active operator grant for this plan. |
| [`plan_grant_already_revoked`](/errors/plan_grant_already_revoked) | This plan grant was already revoked. |
| [`plan_unknown`](/errors/plan_unknown) | The requested plan name is not in the tenant's live plan catalog, so it cannot be assigned to a principal. |
| [`policy_authority_revoked`](/errors/policy_authority_revoked) | Spacefast did not publish this access change. The recorded requester is missing, inactive, or not permitted to change this Space's access. |
| [`policy_exceeds_grantor`](/errors/policy_exceeds_grantor) | The requested key policy grants more than your own credential allows. |
| [`prebuilt_metadata_invalid`](/errors/prebuilt_metadata_invalid) | The metadata file next to the prebuilt archive exists but cannot be read or parsed, so the build's runtime shape is unknown. |
| [`primary_email_not_removable`](/errors/primary_email_not_removable) | The primary email address cannot be removed while it is the primary. |
| [`principal_closed`](/errors/principal_closed) | The external principal is closed. Its spaces are tombstoned and cannot be modified. |
| [`principal_has_active_spaces`](/errors/principal_has_active_spaces) | The external principal still owns spaces, so it cannot be closed. |
| [`principal_not_found`](/errors/principal_not_found) | No external principal with that id exists in this tenant. |
| [`principal_space_mismatch`](/errors/principal_space_mismatch) | The space does not belong to the principal in the request. |
| [`principal_suspended`](/errors/principal_suspended) | The external principal is suspended. Its spaces serve the suspended page and its mutations are blocked. |
| [`principal_suspension_locked`](/errors/principal_suspension_locked) | The suspension was applied by Spacefast (legal/abuse) and cannot be lifted by the partner. |
| [`promote_admission_exceeded`](/errors/promote_admission_exceeded) | Too many archived files are being restored for this space right now. |
| [`promotion_live_content_missing`](/errors/promotion_live_content_missing) | The live tenant's system space has nothing published, so promotion has no content to carry forward. |
| [`promotion_live_system_space_invalid`](/errors/promotion_live_system_space_invalid) | The space designated as the live tenant's system space is not an active space that tenant owns. |
| [`promotion_live_system_space_not_designated`](/errors/promotion_live_system_space_not_designated) | The live tenant has no designated system space, and promotion publishes the test manifest onto it. |
| [`promotion_not_live_tenant`](/errors/promotion_not_live_tenant) | Promotion targets a live tenant, and the tenant named in the request is not in live mode. |
| [`promotion_nothing_to_promote`](/errors/promotion_nothing_to_promote) | The test tenant's system space has no live manifest, so there is no configuration to promote. |
| [`promotion_runtime_publish_incomplete`](/errors/promotion_runtime_publish_incomplete) | The promoted version was accepted but its runtime publish did not finish, so live is unchanged. |
| [`promotion_test_twin_missing`](/errors/promotion_test_twin_missing) | This live tenant has no linked test tenant, so there is nothing to promote from. |
| [`provider_error`](/errors/provider_error) | WP Cloud reported an error. |
| [`provider_job_failed`](/errors/provider_job_failed) | A hosting-provider job failed while processing this operation. |
| [`provider_job_timeout`](/errors/provider_job_timeout) | A hosting-provider job timed out while processing this operation. |
| [`provider_privilege`](/errors/provider_privilege) | WP Cloud does not grant this client permission to change the setting. |
| [`provider_rejected_hostname`](/errors/provider_rejected_hostname) | WP Cloud refused to host this hostname. |
| [`provider_runtime_feature_unsupported`](/errors/provider_runtime_feature_unsupported) | WP Cloud does not support this runtime feature. |
| [`provider_site_id_required`](/errors/provider_site_id_required) | A provider site id is required for this internal operation. |
| [`proxy_upstream_denied`](/errors/proxy_upstream_denied) | The proxy upstream is on a denied network and cannot be used. |
| [`proxy_upstream_unresolved`](/errors/proxy_upstream_unresolved) | The proxy upstream hostname cannot be resolved. |
| [`publish_archive_compression_ratio_exceeded`](/errors/publish_archive_compression_ratio_exceeded) | The archive's compression ratio is suspiciously high and was rejected. |
| [`publish_archive_expanded_size_exceeded`](/errors/publish_archive_expanded_size_exceeded) | The archive expands beyond the maximum allowed total size. |
| [`publish_archive_file_count_exceeded`](/errors/publish_archive_file_count_exceeded) | The archive contains more files than the allowed ceiling. |
| [`publish_archive_too_large`](/errors/publish_archive_too_large) | The uploaded archive exceeds the maximum allowed size. |
| [`publish_base_changed`](/errors/publish_base_changed) | Someone published new space settings after the base you loaded, so saving would overwrite their change. |
| [`publish_bytes_missing`](/errors/publish_bytes_missing) | The publish has no complete staged content to materialize. |
| [`publish_config_unsupported`](/errors/publish_config_unsupported) | The publish carries configuration this endpoint does not support. |
| [`publish_failed`](/errors/publish_failed) | The publish failed before going live. |
| [`publish_file_missing`](/errors/publish_file_missing) | A declared file was never uploaded, so the publish cannot finalize. |
| [`publish_hash_mismatch`](/errors/publish_hash_mismatch) | Publish content does not match its declared sha256. |
| [`publish_inline_limit_exceeded`](/errors/publish_inline_limit_exceeded) | The inline publish exceeds the file-count or total-size limit. |
| [`publish_not_cancelable`](/errors/publish_not_cancelable) | The publish is past the point where it can be canceled. |
| [`publish_path_collision`](/errors/publish_path_collision) | Two different artifacts would serve the same URL after directory-index or clean-URL resolution. |
| [`publish_path_invalid`](/errors/publish_path_invalid) | A publish path is not a relative, normalized POSIX path. |
| [`publish_session_expired`](/errors/publish_session_expired) | This publish session expired before it was finalized. |
| [`publish_setup_failed`](/errors/publish_setup_failed) | Provisioning for this publish failed. |
| [`publish_snapshot_empty`](/errors/publish_snapshot_empty) | An empty snapshot was sent without an explicit base version. |
| [`publish_upload_failed`](/errors/publish_upload_failed) | Uploading the publish content failed. |
| [`publish_verification_failed`](/errors/publish_verification_failed) | Post-publish verification did not see the new content serving. |
| [`queue_not_found`](/errors/queue_not_found) | The named job queue does not exist. |
| [`quota_exceeded`](/errors/quota_exceeded) | This action would exceed a quota on the plan assigned to the owning customer. The problem details name which quota (for example, the spaces cap) and its limit. |
| [`rate_limited`](/errors/rate_limited) | Too many requests were made in a short window. |
| [`realtime_cursor_expired`](/errors/realtime_cursor_expired) | The realtime event cursor is no longer in the retained event history. |
| [`registration_expired`](/errors/registration_expired) | The domain registration is expired. |
| [`registration_expiring`](/errors/registration_expiring) | The domain registration is about to expire, which blocks this operation. |
| [`repository_ref_not_found`](/errors/repository_ref_not_found) | The branch, tag, or commit you asked to read does not exist in this repository. A repository nothing has been pushed to yet answers this for its own default branch. |
| [`repository_stale_base`](/errors/repository_stale_base) | The branch moved after this change was built, so the commit was refused. |
| [`resource_revision_changed`](/errors/resource_revision_changed) | The resource changed after you loaded it, so the stale write was rejected. |
| [`response_headers_unservable`](/errors/response_headers_unservable) | A file needs a response header that the platform cannot deliver for large files. |
| [`response_table_too_large`](/errors/response_table_too_large) | A compiled response table exceeded the 1 MiB per-file limit. |
| [`review_item_claimed`](/errors/review_item_claimed) | Another reviewer already claimed this review item. |
| [`run_replay_diverged`](/errors/run_replay_diverged) | Replaying the paused program took a different path than the first time, so it was stopped. |
| [`runtime_action_forbidden`](/errors/runtime_action_forbidden) | The runtime credential does not allow this action. |
| [`runtime_api_not_found`](/errors/runtime_api_not_found) | The requested runtime action was not found. |
| [`runtime_callback_forbidden`](/errors/runtime_callback_forbidden) | The runtime callback cannot be authenticated. |
| [`runtime_capabilities_pending`](/errors/runtime_capabilities_pending) | The serving runtime is updating to support this application's compiled features. |
| [`runtime_dev_unsupported`](/errors/runtime_dev_unsupported) | `sf dev` cannot run this runtime locally yet. |
| [`runtime_hostname_unassigned`](/errors/runtime_hostname_unassigned) | The hostname is not assigned to a runtime, so the request cannot be routed. |
| [`runtime_instance_mismatch`](/errors/runtime_instance_mismatch) | The request reached a different runtime instance than the one it was issued for. |
| [`runtime_jti_missing`](/errors/runtime_jti_missing) | The runtime token is missing its replay-protection id. |
| [`runtime_jti_replayed`](/errors/runtime_jti_replayed) | The runtime token was already used. Replays are rejected. |
| [`runtime_jwks_key_missing`](/errors/runtime_jwks_key_missing) | No signing key matching the token's key id was found. |
| [`runtime_kind_mismatch`](/errors/runtime_kind_mismatch) | This operation is only available for a different runtime kind. |
| [`runtime_management_unavailable`](/errors/runtime_management_unavailable) | The runtime management surface is unavailable for this site. |
| [`runtime_not_provisioned`](/errors/runtime_not_provisioned) | The space does not serve a published version yet, so it has no runtime data to read. |
| [`runtime_operation_missing`](/errors/runtime_operation_missing) | The runtime operation referenced by this request was not found. |
| [`runtime_purge_failed`](/errors/runtime_purge_failed) | Content updated but the edge cache purge did not confirm. |
| [`runtime_release_unverifiable`](/errors/runtime_release_unverifiable) | The requested platform release could not be verified at its origin. |
| [`runtime_scope_forbidden`](/errors/runtime_scope_forbidden) | The runtime token's scope does not cover this path or action. |
| [`runtime_token_bad_signature`](/errors/runtime_token_bad_signature) | The runtime token signature did not verify. |
| [`runtime_token_expired`](/errors/runtime_token_expired) | The runtime token is expired. |
| [`runtime_token_invalid`](/errors/runtime_token_invalid) | The runtime token cannot be parsed or validated. |
| [`runtime_unauthorized`](/errors/runtime_unauthorized) | The request to the runtime carried no valid credential. |
| [`runtime_upload_operation_not_supported`](/errors/runtime_upload_operation_not_supported) | The runtime upload session does not support this operation. |
| [`runtime_upload_required`](/errors/runtime_upload_required) | This step requires uploaded content, but that content is not uploaded yet. |
| [`scan_pending`](/errors/scan_pending) | The content is still being scanned for safety and cannot be served yet. |
| [`secret_variable_in_template`](/errors/secret_variable_in_template) | A secret variable was referenced in a template, which is blocked. |
| [`service_booting`](/errors/service_booting) | The process that received this request is still starting and cannot serve it yet. |
| [`service_signature_invalid`](/errors/service_signature_invalid) | The service request signature cannot be verified. |
| [`session_not_fresh`](/errors/session_not_fresh) | This action needs a recent identity confirmation. |
| [`site_already_deleted`](/errors/site_already_deleted) | The site was already deleted. |
| [`site_required`](/errors/site_required) | A site reference is required for this operation. |
| [`site_suspended`](/errors/site_suspended) | The site is suspended, so its spaces cannot be served or modified. |
| [`slow_down`](/errors/slow_down) | The device login is being polled faster than the advised interval. |
| [`slug_invalid`](/errors/slug_invalid) | The slug does not meet the structural rules for managed names. |
| [`slug_reserved`](/errors/slug_reserved) | The slug is reserved for infrastructure, product, or impersonation protection. |
| [`slug_unavailable`](/errors/slug_unavailable) | Another resource already uses this slug. Offline spaces retain their slugs. |
| [`source_archive_decompression_timeout`](/errors/source_archive_decompression_timeout) | The uploaded source archive did not finish decompressing within the validation limit. |
| [`source_archive_expansion_ratio_exceeded`](/errors/source_archive_expansion_ratio_exceeded) | The uploaded source archive expands too much relative to its compressed size. |
| [`source_archive_validation_busy`](/errors/source_archive_validation_busy) | The service is already validating its maximum number of source archives. |
| [`source_author_required`](/errors/source_author_required) | The credential has no complete registered profile, so a source commit needs an explicit author. |
| [`source_branch_changed`](/errors/source_branch_changed) | The project branch changed after the workspace read its saved base. |
| [`source_branch_missing`](/errors/source_branch_missing) | The workspace project branch no longer exists in CodeStorage. |
| [`source_commit_not_saved`](/errors/source_commit_not_saved) | The selected commit is not in the project branch's saved first-parent history. |
| [`source_conflict_content_unavailable`](/errors/source_conflict_content_unavailable) | CodeStorage did not return complete contents for a conflict file. |
| [`source_conflicts_missing`](/errors/source_conflicts_missing) | The workspace has no active conflict operation to resolve. |
| [`source_exact_diff_unsupported`](/errors/source_exact_diff_unsupported) | CodeStorage compares from the shared ancestor instead of the two selected snapshots. |
| [`source_file_incomplete`](/errors/source_file_incomplete) | CodeStorage returned fewer bytes than the selected source file requires. |
| [`source_file_mode_unavailable`](/errors/source_file_mode_unavailable) | The source file has no supported mode in the provider metadata. |
| [`source_file_required`](/errors/source_file_required) | The source operation requires file paths instead of folder paths. |
| [`source_file_too_large`](/errors/source_file_too_large) | The source file exceeds the complete-read size limit. |
| [`source_file_unavailable`](/errors/source_file_unavailable) | The selected source snapshot did not return complete file contents. |
| [`source_files_too_large`](/errors/source_files_too_large) | The selected source file contents exceed the operation size limit. |
| [`source_hunk_selection_invalid`](/errors/source_hunk_selection_invalid) | The selected hunks are duplicated or cannot be staged independently. |
| [`source_hunk_stale`](/errors/source_hunk_stale) | The hunk IDs do not match the current source workspace snapshots. |
| [`source_merge_snapshot_changed`](/errors/source_merge_snapshot_changed) | A managed merge ref no longer matches the pinned source snapshot. |
| [`source_merge_undo_unsupported`](/errors/source_merge_undo_unsupported) | The selected source commit is a merge commit with multiple parents. |
| [`source_nothing_staged`](/errors/source_nothing_staged) | The staged source tree has no changes against the saved base. |
| [`source_operation_pending`](/errors/source_operation_pending) | A source workspace operation still has an uncertain provider result. |
| [`source_operation_reused`](/errors/source_operation_reused) | The operation ID was already used with different source input. |
| [`source_operation_superseded`](/errors/source_operation_superseded) | The source operation no longer owns the workspace pending state. |
| [`source_operation_unreconciled`](/errors/source_operation_unreconciled) | The provider result is uncertain and the target branch changed. |
| [`source_patch_unavailable`](/errors/source_patch_unavailable) | CodeStorage did not return a complete patch for the selected hunks. |
| [`source_resolution_invalid`](/errors/source_resolution_invalid) | The resolution contains duplicate paths or paths outside the current conflicts. |
| [`source_resolution_pending`](/errors/source_resolution_pending) | A conflict resolution still has an uncertain provider result. |
| [`source_selection_invalid`](/errors/source_selection_invalid) | The selected file paths are absent from the current workspace diff. |
| [`source_snapshot_changed`](/errors/source_snapshot_changed) | CodeStorage created a managed branch at an unexpected source snapshot. |
| [`source_tree_too_large`](/errors/source_tree_too_large) | The complete source tree exceeds the workspace operation limit. |
| [`source_workspace_closed`](/errors/source_workspace_closed) | The selected source workspace is already closed. |
| [`source_workspace_connection_changed`](/errors/source_workspace_connection_changed) | The Space repository connection changed after this workspace was created. |
| [`source_workspace_connection_in_use`](/errors/source_workspace_connection_in_use) | An open source workspace uses this repository connection. |
| [`source_workspace_dirty`](/errors/source_workspace_dirty) | The workspace contains pending staged or working changes. |
| [`source_workspace_initializing`](/errors/source_workspace_initializing) | The source workspace has not finished creating its baseline snapshots. |
| [`source_workspace_ref_reserved`](/errors/source_workspace_ref_reserved) | The selected ref belongs to the managed source workspace namespace. |
| [`source_workspace_revision_conflict`](/errors/source_workspace_revision_conflict) | The source workspace changed after the caller read its revision. |
| [`source_workspaces_unavailable`](/errors/source_workspaces_unavailable) | Source workspaces are disabled because the provider cannot compare exact snapshots. |
| [`space_already_claimed`](/errors/space_already_claimed) | The space was already claimed. A claim can only succeed once. |
| [`space_claim_unavailable`](/errors/space_claim_unavailable) | This space cannot be claimed. |
| [`space_claimed_credential_available`](/errors/space_claimed_credential_available) | The space was claimed and its owner kept agent publishing enabled; this space key now works exactly once as an exchange voucher. |
| [`space_disabled`](/errors/space_disabled) | The space is disabled and cannot be served or modified. |
| [`space_expired`](/errors/space_expired) | The space expired and is no longer served. |
| [`space_has_active_publish`](/errors/space_has_active_publish) | The space has a publish in progress, which blocks this operation. |
| [`space_has_active_version`](/errors/space_has_active_version) | The space still has an active version, which blocks this operation. |
| [`space_hostname_identity_missing`](/errors/space_hostname_identity_missing) | The space is missing its persisted default hostname identity. |
| [`space_no_live_version`](/errors/space_no_live_version) | The space has no live version, so this operation has nothing to act on. |
| [`space_not_archivable`](/errors/space_not_archivable) | The space is disabled for another reason, so it cannot be archived. |
| [`space_not_disabled`](/errors/space_not_disabled) | The space is not disabled, so it cannot be restored. |
| [`space_not_restorable`](/errors/space_not_restorable) | The space is past its recovery window and cannot be restored. |
| [`space_person_already_member`](/errors/space_person_already_member) | The email already belongs to a member of the space. |
| [`space_person_invitation_pending`](/errors/space_person_invitation_pending) | A Person invitation is already pending for this email. |
| [`space_person_self_invite`](/errors/space_person_self_invite) | The inviter already belongs to the space. |
| [`space_ref_ambiguous`](/errors/space_ref_ambiguous) | The space reference matches more than one accessible space. |
| [`space_ref_required`](/errors/space_ref_required) | A space reference is required for this operation. |
| [`space_selection_conflict`](/errors/space_selection_conflict) | The command asked to create a Space while this directory already selects one. |
| [`space_transferring`](/errors/space_transferring) | The space has a transfer in progress, which blocks this operation. |
| [`space_unclaimed`](/errors/space_unclaimed) | This operation requires a claimed space. |
| [`ssl_renewal_blocked`](/errors/ssl_renewal_blocked) | SSL certificate renewal is blocked for this hostname. |
| [`static_control_file_not_supported`](/errors/static_control_file_not_supported) | This control file is not supported by the static runtime. |
| [`static_runtime_control_path_not_supported`](/errors/static_runtime_control_path_not_supported) | This control path is not supported by the static runtime. |
| [`static_runtime_required`](/errors/static_runtime_required) | This operation only applies to static-runtime spaces. |
| [`storage_auth_required`](/errors/storage_auth_required) | This storage operation requires an authenticated visitor. |
| [`storage_bucket_unavailable`](/errors/storage_bucket_unavailable) | No usable internal storage bucket is configured for this operation. |
| [`storage_content_blocked`](/errors/storage_content_blocked) | The object contains executable or active web content that Spacefast storage does not serve. |
| [`storage_delete_forbidden`](/errors/storage_delete_forbidden) | The current visitor did not upload this object. |
| [`storage_empty_file`](/errors/storage_empty_file) | The storage upload is empty. |
| [`storage_file_too_large`](/errors/storage_file_too_large) | The storage object exceeds the 5 MiB file limit. |
| [`storage_key_invalid`](/errors/storage_key_invalid) | The storage object id is malformed. |
| [`storage_object_not_found`](/errors/storage_object_not_found) | The requested storage object does not exist. |
| [`storage_quota_already_unlimited`](/errors/storage_quota_already_unlimited) | The team already has unlimited storage. |
| [`storage_quota_decrease_not_supported`](/errors/storage_quota_decrease_not_supported) | This control cannot reduce a team's storage quota. |
| [`storage_quota_exceeded`](/errors/storage_quota_exceeded) | The operation would exceed its storage allowance. |
| [`storage_unavailable`](/errors/storage_unavailable) | The runtime cannot read or persist object storage. |
| [`stripe_error`](/errors/stripe_error) | The billing provider reported an error. |
| [`superadmin_two_factor_required`](/errors/superadmin_two_factor_required) | The user must have two-factor authentication enrolled before being granted superadmin. |
| [`superadmin_wpcom_account_required`](/errors/superadmin_wpcom_account_required) | The user must have a WordPress.com account linked before being granted superadmin. |
| [`superseded_by_publish`](/errors/superseded_by_publish) | A newer publish superseded this operation, so it was skipped. |
| [`system_space_conflict`](/errors/system_space_conflict) | The tenant's system space changed since the value you sent as `baseSystemSpaceId`, so the update was rejected. |
| [`system_space_invalid`](/errors/system_space_invalid) | The requested system space does not exist, is disabled, or belongs to another tenant. |
| [`system_team_immutable`](/errors/system_team_immutable) | This team is operated by Spacefast. Its name, slug and lifecycle are fixed, so renaming or deleting it was refused. |
| [`takeover_notice_window`](/errors/takeover_notice_window) | The hostname was recently bound elsewhere. A takeover notice window applies. |
| [`team_member_quota_exceeded`](/errors/team_member_quota_exceeded) | Inviting this person would exceed the team's seat limit. |
| [`team_ref_required`](/errors/team_ref_required) | A team reference is required for this operation. |
| [`team_required`](/errors/team_required) | This operation requires an acting team. |
| [`team_scope_mismatch`](/errors/team_scope_mismatch) | The requested team conflicts with the team this credential or resource is bound to. |
| [`team_slug_conflict`](/errors/team_slug_conflict) | The team slug is already taken. |
| [`template_file_too_large`](/errors/template_file_too_large) | A template file exceeds the maximum size for substitution. |
| [`template_not_in_version`](/errors/template_not_in_version) | The configuration names a template file the version does not contain. |
| [`template_variable_unresolved`](/errors/template_variable_unresolved) | A template references a variable that has no value. |
| [`tenant_id_mismatch`](/errors/tenant_id_mismatch) | The resource belongs to a different tenant than the request. |
| [`tenant_not_found`](/errors/tenant_not_found) | The tenant was not found. |
| [`tenant_not_granted`](/errors/tenant_not_granted) | Your credential has no grant on the requested tenant. |
| [`tenant_past_due`](/errors/tenant_past_due) | The tenant is past due. Mutations are rejected while serving continues. |
| [`tenant_selection_required`](/errors/tenant_selection_required) | The credential spans multiple tenants, so the request must select one. |
| [`tenant_suspended`](/errors/tenant_suspended) | The tenant is suspended, so its resources cannot be served or modified. |
| [`theme_value_invalid`](/errors/theme_value_invalid) | A theme value in the configuration is outside the allowed grammar. |
| [`token_alg_invalid`](/errors/token_alg_invalid) | The partner token uses a signing algorithm that Spacefast does not allow. |
| [`token_audience_mismatch`](/errors/token_audience_mismatch) | The partner token audience does not match the audience for its issuer. |
| [`token_claims_invalid`](/errors/token_claims_invalid) | The partner token omits a required claim or contains an invalid claim value. |
| [`token_header_forbidden`](/errors/token_header_forbidden) | The partner token contains a header that can select an untrusted key. |
| [`token_malformed`](/errors/token_malformed) | The partner token is not a valid compact JWT within the size limit. |
| [`token_signature_invalid`](/errors/token_signature_invalid) | The partner token signature does not match a registered issuer key. |
| [`token_subject_invalid`](/errors/token_subject_invalid) | The partner token subject is not a normalized lowercase external principal id. |
| [`token_ttl_invalid`](/errors/token_ttl_invalid) | The partner token time claims are expired, premature, or outside the lifetime limit. |
| [`token_type_invalid`](/errors/token_type_invalid) | The partner token has a typ header that Spacefast does not accept. |
| [`traffic_rules_placement_incomplete`](/errors/traffic_rules_placement_incomplete) | The redirects and headers this version runs at the edge are not all there, so going live would drop them. |
| [`traffic_rules_unavailable`](/errors/traffic_rules_unavailable) | This space has no edge yet, so it cannot hold or check traffic rules. |
| [`transfer_cross_tenant_unsupported`](/errors/transfer_cross_tenant_unsupported) | Spaces cannot be transferred across tenants. |
| [`transfer_not_cancelable`](/errors/transfer_not_cancelable) | The transfer is past the point where it can be canceled. |
| [`transfer_push_failed`](/errors/transfer_push_failed) | The source runtime cannot push the space blobs into the transfer bucket. |
| [`transfer_source_changed`](/errors/transfer_source_changed) | The space changed since the transfer was created, so it must be re-confirmed. |
| [`transfer_target_same_as_source`](/errors/transfer_target_same_as_source) | The transfer target is the same principal that already owns the space. |
| [`transfer_verify_failed`](/errors/transfer_verify_failed) | The target runtime cannot verify transferred blob content. |
| [`unauthorized`](/errors/unauthorized) | The request carried no valid credential. |
| [`unsupported_publish_media_type`](/errors/unsupported_publish_media_type) | The publish content-type is not supported. |
| [`upload_hash_mismatch`](/errors/upload_hash_mismatch) | An uploaded file's bytes do not match the declared sha256. |
| [`upload_path_not_canonical`](/errors/upload_path_not_canonical) | An upload path is not in canonical (decoded, NFC-normalized) form. |
| [`upload_path_not_declared`](/errors/upload_path_not_declared) | An uploaded path was not declared in the version's manifest. |
| [`upload_size_mismatch`](/errors/upload_size_mismatch) | An uploaded file's size does not match the declared size. |
| [`usage_period_not_found`](/errors/usage_period_not_found) | The requested usage period does not exist in this tenant. |
| [`user_banned`](/errors/user_banned) | This user is banned for a policy or abuse violation and cannot perform this action. |
| [`validation_error`](/errors/validation_error) | A request field failed validation. |
| [`verification_required`](/errors/verification_required) | Domain verification is required before this operation. |
| [`version_already_live`](/errors/version_already_live) | The version is already live on this channel. |
| [`version_artifact_not_found`](/errors/version_artifact_not_found) | The requested version artifact was not found. |
| [`version_busy`](/errors/version_busy) | The version is busy with another operation. |
| [`version_canceled`](/errors/version_canceled) | The version was canceled and cannot be used. |
| [`version_closed`](/errors/version_closed) | The version's upload session is closed. No more files can be added. |
| [`version_expired`](/errors/version_expired) | The version's upload session expired before it was finalized. |
| [`version_failed`](/errors/version_failed) | The version failed and cannot be used. |
| [`version_file_count_exceeded`](/errors/version_file_count_exceeded) | The version exceeds the maximum number of files. |
| [`version_file_not_found`](/errors/version_file_not_found) | The requested file does not exist in this version. |
| [`version_file_too_large`](/errors/version_file_too_large) | A file exceeds the plan's maximum file size. |
| [`version_files_missing`](/errors/version_files_missing) | Declared files were never uploaded, so the version cannot finalize. |
| [`version_in_use`](/errors/version_in_use) | The version is referenced by one or more channels and cannot be deleted. |
| [`version_live`](/errors/version_live) | The version is live and cannot be deleted. |
| [`version_not_finalizable`](/errors/version_not_finalizable) | The version cannot be finalized in its current status. |
| [`version_not_found`](/errors/version_not_found) | The version was not found. |
| [`version_not_prepared`](/errors/version_not_prepared) | The version is not prepared for this operation. |
| [`version_not_promotable`](/errors/version_not_promotable) | The version cannot be promoted in its current status. |
| [`version_not_ready`](/errors/version_not_ready) | The version is not ready yet. |
| [`version_total_bytes_exceeded`](/errors/version_total_bytes_exceeded) | The version exceeds the maximum total size, counting the files it keeps from the previous version as well as the ones it uploads. |
| [`visitor_role_not_bindable`](/errors/visitor_role_not_bindable) | Visitors connect their own accounts for this role. |
| [`visual_review_context_too_large`](/errors/visual_review_context_too_large) | The selected page context exceeds the review limit. |
| [`visual_review_expired`](/errors/visual_review_expired) | The temporary review expired after one hour. |
| [`visual_review_forbidden`](/errors/visual_review_forbidden) | This authority cannot access the review or its recorded deployment. |
| [`visual_review_invalid_image`](/errors/visual_review_invalid_image) | The screenshot is not a valid PNG payload. |
| [`visual_review_invalid_note`](/errors/visual_review_invalid_note) | A note has a duplicate ID or an inconsistent capture status. |
| [`visual_review_submitted`](/errors/visual_review_submitted) | This review already contains a different feedback batch. |
| [`visual_review_too_large`](/errors/visual_review_too_large) | The feedback batch exceeds the screenshot delivery limit. |
| [`webhook_delivery_budget_exceeded`](/errors/webhook_delivery_budget_exceeded) | The webhook exhausted its delivery budget and was paused. |
| [`webhook_managed_by_manifest`](/errors/webhook_managed_by_manifest) | The webhook is declared in the tenant's system-space manifest. |
| [`whois_unavailable`](/errors/whois_unavailable) | WHOIS data is unavailable for this domain right now. |
| [`wp_cli_result_unavailable`](/errors/wp_cli_result_unavailable) | WP Cloud finished the WP-CLI task without reporting whether it succeeded. |
| [`wp_cli_timeout`](/errors/wp_cli_timeout) | The WP-CLI command did not finish in time and may still be running on the site. |
| [`wp_cloud_assignment_kind_mismatch`](/errors/wp_cloud_assignment_kind_mismatch) | The domain assignment's kind does not match the site. |
| [`wp_cloud_assignment_space_mismatch`](/errors/wp_cloud_assignment_space_mismatch) | The domain assignment belongs to a different space. |
| [`wp_cloud_assignment_team_mismatch`](/errors/wp_cloud_assignment_team_mismatch) | The domain assignment belongs to a different team. |
| [`wp_cloud_client_in_use`](/errors/wp_cloud_client_in_use) | The provider client is in use and cannot be removed. |
| [`wp_cloud_client_not_found`](/errors/wp_cloud_client_not_found) | The provider client was not found. |
| [`wp_cloud_domain_not_on_site`](/errors/wp_cloud_domain_not_on_site) | The hostname is not a domain of this provider site. |
| [`wp_cloud_site_still_assigned`](/errors/wp_cloud_site_still_assigned) | The provider site still has assignments and cannot be released. |
| [`wp_cloud_webhook_secret_not_configured`](/errors/wp_cloud_webhook_secret_not_configured) | The infra webhook secret is not configured on this deployment. |
| [`zero_ai_unavailable`](/errors/zero_ai_unavailable) | The local Zero AI service is not configured. |
| [`zero_artifact_abi_mismatch`](/errors/zero_artifact_abi_mismatch) | The Zero endpoint artifact was built for a different runner ABI. |
| [`zero_artifact_invalid`](/errors/zero_artifact_invalid) | The Zero endpoint artifact is missing required runtime metadata. |
| [`zero_artifact_malformed`](/errors/zero_artifact_malformed) | The Zero endpoint artifact cannot be parsed. |
| [`zero_artifact_path_invalid`](/errors/zero_artifact_path_invalid) | The Zero endpoint artifact path is invalid. |
| [`zero_artifact_unreadable`](/errors/zero_artifact_unreadable) | The Zero endpoint artifact cannot be read by the runtime. |
| [`zero_auth_unavailable`](/errors/zero_auth_unavailable) | Hosted Zero auth is not configured for this deployment. |
| [`zero_blob_key_invalid`](/errors/zero_blob_key_invalid) | The local Zero blob key is invalid. |
| [`zero_blob_store_full`](/errors/zero_blob_store_full) | The local Zero blob store reached its configured size limit. |
| [`zero_blob_too_large`](/errors/zero_blob_too_large) | The local Zero blob value exceeds the maximum allowed size. |
| [`zero_blob_value_invalid`](/errors/zero_blob_value_invalid) | The local Zero blob request body is invalid. |
| [`zero_bootstrap_encode_failed`](/errors/zero_bootstrap_encode_failed) | The Zero runner cannot encode the JavaScript bootstrap data. |
| [`zero_bytecode_hash_mismatch`](/errors/zero_bytecode_hash_mismatch) | The Zero endpoint bytecode hash does not match its artifact metadata. |
| [`zero_bytecode_invalid`](/errors/zero_bytecode_invalid) | The Zero endpoint bytecode cannot be loaded by QuickJS. |
| [`zero_bytecode_path_invalid`](/errors/zero_bytecode_path_invalid) | The Zero endpoint bytecode path is invalid. |
| [`zero_bytecode_unreadable`](/errors/zero_bytecode_unreadable) | The Zero endpoint bytecode file cannot be read. |
| [`zero_capabilities_encode_failed`](/errors/zero_capabilities_encode_failed) | The runtime cannot encode the Zero endpoint capabilities. |
| [`zero_client_bundle_not_loaded`](/errors/zero_client_bundle_not_loaded) | The local Zero dev client bundle is not generated or loaded. |
| [`zero_db_connect_failed`](/errors/zero_db_connect_failed) | The Zero runner cannot connect to the configured database. |
| [`zero_db_execute_failed`](/errors/zero_db_execute_failed) | A Zero database write failed. |
| [`zero_db_export_cursor_invalid`](/errors/zero_db_export_cursor_invalid) | The local database export cursor is invalid or belongs to another export. |
| [`zero_db_export_failed`](/errors/zero_db_export_failed) | The runtime cannot read a database export page. |
| [`zero_db_export_page_too_large`](/errors/zero_db_export_page_too_large) | One database export page exceeded the 16 MiB response limit. |
| [`zero_db_export_query_invalid`](/errors/zero_db_export_query_invalid) | The local database export request has an invalid table or page size. |
| [`zero_db_export_schema_changed`](/errors/zero_db_export_schema_changed) | The database schema changed while an export was in progress. |
| [`zero_db_export_schema_unavailable`](/errors/zero_db_export_schema_unavailable) | The live capsule has no stable schema hash for a complete export. |
| [`zero_db_host_install_failed`](/errors/zero_db_host_install_failed) | The Zero runner cannot install the database host bridge. |
| [`zero_db_operation_invalid`](/errors/zero_db_operation_invalid) | The Zero database bridge received an invalid operation payload. |
| [`zero_db_operation_too_large`](/errors/zero_db_operation_too_large) | A database operation is larger than 64 KB (65,536 bytes). A batch counts as one operation. |
| [`zero_db_param_invalid`](/errors/zero_db_param_invalid) | A Zero database query parameter has an unsupported value. |
| [`zero_db_query_failed`](/errors/zero_db_query_failed) | A Zero database read failed. |
| [`zero_db_row_invalid`](/errors/zero_db_row_invalid) | A database row cannot be converted into a Zero response value. |
| [`zero_db_sql_invalid`](/errors/zero_db_sql_invalid) | The Zero runner rejected unsafe or unsupported SQL. |
| [`zero_db_target_denied`](/errors/zero_db_target_denied) | The application Zero database target is not a public TCP address. |
| [`zero_db_tls_required`](/errors/zero_db_tls_required) | The application Zero database cannot be connected with verified pinned TLS. |
| [`zero_db_too_many_params`](/errors/zero_db_too_many_params) | A database statement binds more than 256 parameters. |
| [`zero_db_transaction_active`](/errors/zero_db_transaction_active) | The Zero runner tried to start a database transaction while one was already active. |
| [`zero_db_transaction_commit_failed`](/errors/zero_db_transaction_commit_failed) | The Zero database transaction cannot be committed. |
| [`zero_db_transaction_invalid`](/errors/zero_db_transaction_invalid) | A database batch is empty or has more than 64 statements. |
| [`zero_db_transaction_missing`](/errors/zero_db_transaction_missing) | The Zero runner tried to finish a database transaction that was not active. |
| [`zero_db_transaction_rollback_failed`](/errors/zero_db_transaction_rollback_failed) | The Zero database transaction cannot be rolled back cleanly. |
| [`zero_db_transaction_start_failed`](/errors/zero_db_transaction_start_failed) | The Zero database transaction cannot be started. |
| [`zero_db_url_invalid`](/errors/zero_db_url_invalid) | The Zero database URL is malformed. |
| [`zero_db_url_missing`](/errors/zero_db_url_missing) | No Zero database URL is configured. |
| [`zero_dev_endpoint_failed`](/errors/zero_dev_endpoint_failed) | A local Zero dev endpoint failed while handling the request. |
| [`zero_dump_query_invalid`](/errors/zero_dump_query_invalid) | The Zero database dump query parameters are invalid. |
| [`zero_email_unavailable`](/errors/zero_email_unavailable) | The local Zero email service is not configured. |
| [`zero_endpoint_compile_failed`](/errors/zero_endpoint_compile_failed) | The runtime cannot compile the Zero endpoint bytecode. |
| [`zero_endpoint_conflict`](/errors/zero_endpoint_conflict) | Two Zero routes resolve to the same runtime path. |
| [`zero_endpoint_duplicate`](/errors/zero_endpoint_duplicate) | Two Zero endpoints declare the same method and route. |
| [`zero_endpoint_id_duplicate`](/errors/zero_endpoint_id_duplicate) | Two Zero endpoints declare the same endpoint id. |
| [`zero_endpoint_index_invalid`](/errors/zero_endpoint_index_invalid) | The Zero endpoint index does not contain valid endpoint mappings. |
| [`zero_endpoint_index_malformed`](/errors/zero_endpoint_index_malformed) | The Zero endpoint index cannot be parsed. |
| [`zero_endpoint_index_path_invalid`](/errors/zero_endpoint_index_path_invalid) | The Zero endpoint index path is invalid. |
| [`zero_endpoint_index_unreadable`](/errors/zero_endpoint_index_unreadable) | The Zero endpoint index cannot be read. |
| [`zero_endpoint_invalid`](/errors/zero_endpoint_invalid) | A Zero endpoint definition or its database metadata is invalid. |
| [`zero_endpoint_mismatch`](/errors/zero_endpoint_mismatch) | The requested Zero endpoint does not match the endpoint artifact. |
| [`zero_endpoint_not_found`](/errors/zero_endpoint_not_found) | No Zero endpoint artifact exists for this endpoint id. |
| [`zero_endpoints_invalid`](/errors/zero_endpoints_invalid) | The Zero endpoints payload is invalid. |
| [`zero_endpoints_too_many`](/errors/zero_endpoints_too_many) | The Zero endpoints payload exceeds the supported endpoint count. |
| [`zero_envelope_encode_failed`](/errors/zero_envelope_encode_failed) | The PHP bridge cannot encode the Zero runner request envelope. |
| [`zero_gravatar_unavailable`](/errors/zero_gravatar_unavailable) | The local Zero Gravatar service is not configured. |
| [`zero_js_context_init_failed`](/errors/zero_js_context_init_failed) | The Zero runner cannot initialize a QuickJS context. |
| [`zero_js_execution_failed`](/errors/zero_js_execution_failed) | The Zero endpoint JavaScript threw during execution. |
| [`zero_js_execution_timeout`](/errors/zero_js_execution_timeout) | The Zero endpoint exceeded its JavaScript execution budget. |
| [`zero_js_globals_failed`](/errors/zero_js_globals_failed) | The Zero runner cannot install runtime globals for the endpoint. |
| [`zero_js_response_malformed`](/errors/zero_js_response_malformed) | The Zero endpoint returned a malformed runner response. |
| [`zero_js_runtime_init_failed`](/errors/zero_js_runtime_init_failed) | The Zero runner cannot initialize QuickJS. |
| [`zero_log_query_invalid`](/errors/zero_log_query_invalid) | The Zero log query parameters are invalid. |
| [`zero_method_not_allowed`](/errors/zero_method_not_allowed) | The request method is not allowed for this Zero endpoint. |
| [`zero_migration_failed`](/errors/zero_migration_failed) | The Zero database migration command failed during finalize. |
| [`zero_mutation_origin_invalid`](/errors/zero_mutation_origin_invalid) | The cookie-authenticated Zero mutation did not prove the serving origin. |
| [`zero_query_name_missing`](/errors/zero_query_name_missing) | A Zero realtime query subscription did not include a query name. |
| [`zero_realtime_forbidden`](/errors/zero_realtime_forbidden) | The Zero realtime event intake credential is invalid. |
| [`zero_realtime_message_invalid`](/errors/zero_realtime_message_invalid) | The Zero realtime websocket message is malformed. |
| [`zero_realtime_operation_unsupported`](/errors/zero_realtime_operation_unsupported) | The Zero realtime websocket operation is unsupported. |
| [`zero_realtime_query_invalid`](/errors/zero_realtime_query_invalid) | The Zero realtime query subscription payload is invalid. |
| [`zero_realtime_space_required`](/errors/zero_realtime_space_required) | The Zero realtime request does not identify a space. |
| [`zero_realtime_unavailable`](/errors/zero_realtime_unavailable) | Zero realtime helpers are unavailable for this endpoint. |
| [`zero_realtime_websocket_forbidden`](/errors/zero_realtime_websocket_forbidden) | The Zero realtime websocket credential is invalid. |
| [`zero_replay_failed`](/errors/zero_replay_failed) | The hosted Zero runtime cannot fetch realtime replay events. |
| [`zero_replay_query_invalid`](/errors/zero_replay_query_invalid) | The hosted Zero realtime replay query is invalid. |
| [`zero_replay_unavailable`](/errors/zero_replay_unavailable) | Realtime replay is not configured for this Zero version. |
| [`zero_request_body_too_large`](/errors/zero_request_body_too_large) | The Zero request body exceeds the runtime size limit. |
| [`zero_response_header_forbidden`](/errors/zero_response_header_forbidden) | A Zero endpoint attempted to set a platform-managed response header. |
| [`zero_response_header_invalid`](/errors/zero_response_header_invalid) | A Zero endpoint response header is invalid or exceeds the header limits. |
| [`zero_response_too_large`](/errors/zero_response_too_large) | The Zero endpoint response exceeds the runtime size limit. |
| [`zero_routes_invalid`](/errors/zero_routes_invalid) | The Zero routes artifact is invalid. |
| [`zero_run_compile_failed`](/errors/zero_run_compile_failed) | The runtime cannot compile a Zero run handler. |
| [`zero_run_duplicate`](/errors/zero_run_duplicate) | Two Zero run handlers declare the same run id. |
| [`zero_run_invalid`](/errors/zero_run_invalid) | A Zero run-handler definition is invalid. |
| [`zero_run_operation_unsupported`](/errors/zero_run_operation_unsupported) | The hosted Zero runtime does not support this run operation yet. |
| [`zero_runner_envelope_invalid`](/errors/zero_runner_envelope_invalid) | The Zero runner request envelope is malformed. |
| [`zero_runner_failed`](/errors/zero_runner_failed) | The Zero runner process exited without a valid response. |
| [`zero_runner_invalid_body`](/errors/zero_runner_invalid_body) | The Zero runner returned an invalid response body. |
| [`zero_runner_invalid_response`](/errors/zero_runner_invalid_response) | The Zero runner output was not valid JSON. |
| [`zero_runner_invalid_status`](/errors/zero_runner_invalid_status) | The Zero runner returned an invalid HTTP status. |
| [`zero_runner_protocol_unsupported`](/errors/zero_runner_protocol_unsupported) | The Zero runner received an unsupported invoke protocol. |
| [`zero_runner_response_encode_failed`](/errors/zero_runner_response_encode_failed) | The Zero runner cannot encode its response. |
| [`zero_runner_stdin_invalid`](/errors/zero_runner_stdin_invalid) | The Zero runner cannot read its request envelope. |
| [`zero_runner_stdin_too_large`](/errors/zero_runner_stdin_too_large) | The Zero runner request envelope is too large. |
| [`zero_runner_unavailable`](/errors/zero_runner_unavailable) | The Zero runner process cannot be started. |
| [`zero_runs_invalid`](/errors/zero_runs_invalid) | The Zero run-handler payload is invalid. |
| [`zero_runs_require_runtime_compiler`](/errors/zero_runs_require_runtime_compiler) | Zero run handlers require the Rust runtime compiler. |
| [`zero_runs_too_many`](/errors/zero_runs_too_many) | The Zero run-handler payload exceeds the supported handler count. |
| [`zero_spam_unavailable`](/errors/zero_spam_unavailable) | The local Zero spam service is not configured. |
