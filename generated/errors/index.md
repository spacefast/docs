---
title: "Error reference"
description: "Every Spacefast API error is a problem document with a stable code and a type URI linking to its reference page."
---

Every Spacefast API error is an RFC 9457 problem document (`application/problem+json`).
It carries a stable `code` and a `type` URI that links to one of the pages below. Match on
`code` in clients. The meaning of a `code` stays stable, while `detail` text can change.
Retired codes leave with the API that owns them.

There are 590 error codes in the registry.

| Code | Meaning |
| --- | --- |
| [`abuse_report_invalid_transition`](/errors/abuse_report_invalid_transition) | The abuse report cannot move from its current status to the requested one. |
| [`abuse_report_rate_limited`](/errors/abuse_report_rate_limited) | Too many abuse reports were submitted from this IP address in the past hour. |
| [`abuse_takedown`](/errors/abuse_takedown) | The Space was taken down for abuse and is not being served. |
| [`access_denied`](/errors/access_denied) | Access was refused: the Space or page is private, or the user rejected the device login. |
| [`account_suspended`](/errors/account_suspended) | The account behind this Space is suspended, so its Spaces are not served. |
| [`agent_handoff_declined`](/errors/agent_handoff_declined) | The agent handoff was declined and cannot be redeemed. |
| [`agent_handoff_limit_reached`](/errors/agent_handoff_limit_reached) | The user already holds the maximum number of pending agent handoffs. |
| [`agent_handoff_origin_unsupported`](/errors/agent_handoff_origin_unsupported) | The configured dashboard origin cannot mint canonical agent handoff links. |
| [`ambiguous_space_slug`](/errors/ambiguous_space_slug) | The slug matches more than one Space the caller can reach. |
| [`anonymous_expired`](/errors/anonymous_expired) | The anonymous Space expired before anyone claimed it. |
| [`anonymous_external_proxy_disabled`](/errors/anonymous_external_proxy_disabled) | Proxy routes to external upstreams do not serve on an unclaimed space. |
| [`anonymous_publish_rate_limited`](/errors/anonymous_publish_rate_limited) | Too many anonymous publishes came from this client in the rate limit window. |
| [`anonymous_space_limit_reached`](/errors/anonymous_space_limit_reached) | This client already holds the maximum number of unclaimed Spaces. |
| [`api_key_scope_underivable`](/errors/api_key_scope_underivable) | The requested scope and permissions do not resolve to a concrete access policy. |
| [`archive_too_large`](/errors/archive_too_large) | The uploaded archive is larger than the publish size limit. |
| [`artifact_binding_unresolved`](/errors/artifact_binding_unresolved) | The artifact names a connection role that is not bound to a connection. |
| [`artifact_invalid_source`](/errors/artifact_invalid_source) | The artifact source is not a renderable page component. |
| [`artifact_not_found`](/errors/artifact_not_found) | No artifact exists at this space and path. |
| [`auth_code_required`](/errors/auth_code_required) | A domain transfer-in was requested without the registrar authorization code. |
| [`authorization_level_not_allowed`](/errors/authorization_level_not_allowed) | The credential's authorization level does not allow this request. |
| [`authorization_pending`](/errors/authorization_pending) | The device authorization is still waiting for the user to approve it. |
| [`blob_gate_record_missing`](/errors/blob_gate_record_missing) | No blob gate record exists for the requested blob. |
| [`blob_gate_token_invalid`](/errors/blob_gate_token_invalid) | The blob gate token is not valid for this blob. |
| [`build_command_missing`](/errors/build_command_missing) | A build or install command was not found in the build environment. |
| [`build_execution_unavailable`](/errors/build_execution_unavailable) | The build never reached a verdict because a Spacefast dependency was unavailable. |
| [`build_failed`](/errors/build_failed) | The build ran and ended in failure. |
| [`build_install_failed`](/errors/build_install_failed) | The dependency install step of the build failed. |
| [`build_minutes_quota_exceeded`](/errors/build_minutes_quota_exceeded) | This build would exceed the owner's build minutes for the month. |
| [`build_no_index_html`](/errors/build_no_index_html) | The build output has no `index.html` at its root. |
| [`build_not_created`](/errors/build_not_created) | No build was created for this request. |
| [`build_oom`](/errors/build_oom) | The build was killed after exhausting the memory available to it. |
| [`build_output_contains_server_bundle`](/errors/build_output_contains_server_bundle) | The publish output contains a compiled server bundle. |
| [`build_output_dir_missing`](/errors/build_output_dir_missing) | The build finished without producing its output directory. |
| [`build_timeout`](/errors/build_timeout) | The build exceeded its time limit and was stopped. |
| [`cache_purge_domain_required`](/errors/cache_purge_domain_required) | The cache purge request did not name a domain. |
| [`cache_purge_path_required`](/errors/cache_purge_path_required) | The cache purge request did not name a path. |
| [`catalog_unavailable`](/errors/catalog_unavailable) | The connector catalog could not be built right now. |
| [`channel_name_reserved`](/errors/channel_name_reserved) | The requested channel name is reserved. |
| [`channel_pointer_moved`](/errors/channel_pointer_moved) | The live channel moved to another version while this activation was in flight. |
| [`channel_unsupported`](/errors/channel_unsupported) | The named channel is not one this endpoint serves. |
| [`claim_blocked_takedown`](/errors/claim_blocked_takedown) | The Space was taken down for abuse and cannot be claimed. |
| [`claim_target_not_found`](/errors/claim_target_not_found) | No team was resolved to claim the Space into. |
| [`cli_upgrade_required`](/errors/cli_upgrade_required) | This request needs a newer version of the `sf` CLI. |
| [`config_file_too_large`](/errors/config_file_too_large) | The Space config overlay is larger than the allowed byte cap. |
| [`config_functions_key_removed`](/errors/config_functions_key_removed) | The Space config still sets the retired `functions` key. |
| [`config_invalid`](/errors/config_invalid) | The Space config did not validate. |
| [`config_meta_too_long`](/errors/config_meta_too_long) | A `meta` value in the Space config is longer than its character limit. |
| [`config_name_too_long`](/errors/config_name_too_long) | The Space config `name` is longer than its character limit. |
| [`config_runtime_entry_missing`](/errors/config_runtime_entry_missing) | The Space config declares a runtime but its entry file was not found. |
| [`config_runtime_invalid_kind`](/errors/config_runtime_invalid_kind) | The Space config declares a runtime kind this command does not handle. |
| [`config_templates_over_limit`](/errors/config_templates_over_limit) | The Space config lists more `templates` entries than the limit allows. |
| [`confirmation_denied`](/errors/confirmation_denied) | A person denied this action at the confirmation gate. |
| [`confirmation_expired`](/errors/confirmation_expired) | The confirmation for this action expired before it was used. |
| [`confirmation_mismatch`](/errors/confirmation_mismatch) | The confirmation does not match the action terms it was issued for. |
| [`confirmation_required`](/errors/confirmation_required) | A person must approve this exact action before it can run. |
| [`confirmation_token_required`](/errors/confirmation_token_required) | This action already has a decision that only its continuation token can resume. |
| [`connection_ambiguous`](/errors/connection_ambiguous) | The connector has more than one connection you can use, so the call did not name one. |
| [`connection_forbidden`](/errors/connection_forbidden) | This credential is not granted the connection it tried to use. |
| [`connection_needs_reauth`](/errors/connection_needs_reauth) | The stored credential expired or was revoked at the provider. |
| [`connection_not_found`](/errors/connection_not_found) | No connection exists with this id, or this credential cannot see it. |
| [`connection_revoked`](/errors/connection_revoked) | This connection was disconnected and its credential was purged. |
| [`connector_approval_required`](/errors/connector_approval_required) | The call needs a person to approve it before it runs. |
| [`connector_first_party_immutable`](/errors/connector_first_party_immutable) | This connector is built into Spacefast and cannot be edited or removed. |
| [`connector_not_found`](/errors/connector_not_found) | No connector exists with this slug for this team. |
| [`connector_run_budget_exhausted`](/errors/connector_run_budget_exhausted) | The run hit its tool-call, egress, or time budget and stopped. |
| [`connector_run_not_found`](/errors/connector_run_not_found) | No run exists with this id, or this credential cannot see it. |
| [`connector_run_not_resumable`](/errors/connector_run_not_resumable) | The run already settled, or its approval expired. |
| [`connector_slug_taken`](/errors/connector_slug_taken) | This team already has a connector with that slug. |
| [`connector_source_blocked`](/errors/connector_source_blocked) | The source URL points somewhere the egress guard refuses to fetch. |
| [`connector_source_unreachable`](/errors/connector_source_unreachable) | The spec or endpoint could not be fetched. |
| [`connector_tool_blocked`](/errors/connector_tool_blocked) | A policy rule blocks this tool for this caller. |
| [`continuation_unavailable`](/errors/continuation_unavailable) | The claim token cannot be exchanged for a durable credential. |
| [`continuation_used`](/errors/continuation_used) | This claim token was already exchanged for a durable credential. |
| [`credential_expired`](/errors/credential_expired) | The credential on this request is past its expiry. |
| [`credential_not_yet_valid`](/errors/credential_not_yet_valid) | The API key is not valid until its `notBefore` time. |
| [`credential_retired`](/errors/credential_retired) | The credential was retired and does not authenticate. |
| [`credential_revoked`](/errors/credential_revoked) | The credential on this request was revoked. |
| [`credential_sponsor_inactive`](/errors/credential_sponsor_inactive) | The person who authorized this machine credential is not an active team member. |
| [`csam_blocked`](/errors/csam_blocked) | The content was blocked by the CSAM policy. |
| [`csam_policy_floor`](/errors/csam_policy_floor) | A CSAM enforcement policy was set below the tier the policy floor requires. |
| [`dashboard_prefs_key_invalid`](/errors/dashboard_prefs_key_invalid) | A dashboard preference key is empty or longer than the allowed length. |
| [`dashboard_prefs_too_large`](/errors/dashboard_prefs_too_large) | The dashboard preferences serialize to more bytes than the limit allows. |
| [`dashboard_prefs_too_many_keys`](/errors/dashboard_prefs_too_many_keys) | The dashboard preferences hold more keys than the limit allows. |
| [`data_location_immutable`](/errors/data_location_immutable) | A Space's data location cannot change after the Space is created. |
| [`db_not_available`](/errors/db_not_available) | The Space's live version has no database. |
| [`decision_execution_lost`](/errors/decision_execution_lost) | The confirmation execution lease is not held by this request. |
| [`decision_in_progress`](/errors/decision_in_progress) | The approved action is already being executed. |
| [`device_authorization_failed`](/errors/device_authorization_failed) | The device authorization could not be started. |
| [`device_verification_rate_limited`](/errors/device_verification_rate_limited) | Too many device verification attempts came from this caller. |
| [`dns_export_required`](/errors/dns_export_required) | Records still have to be created at the DNS provider before this domain works. |
| [`dns_field_conflict`](/errors/dns_field_conflict) | A CNAME or ALIAS record cannot sit beside other records at the same name. |
| [`dns_field_not_applicable`](/errors/dns_field_not_applicable) | A field in the record is not writable for this DNS provider or management mode. |
| [`dns_import_partial_visibility`](/errors/dns_import_partial_visibility) | The DNS import could observe only part of the zone. |
| [`dns_provider_auth_expired`](/errors/dns_provider_auth_expired) | The stored DNS provider authorization expired. |
| [`dns_provider_batch_unsupported`](/errors/dns_provider_batch_unsupported) | The DNS provider does not accept batched record writes. |
| [`dns_provider_change_pending`](/errors/dns_provider_change_pending) | A DNS change is still pending at the provider. |
| [`dns_provider_conflict`](/errors/dns_provider_conflict) | The DNS provider rejected the change as conflicting with a record it already holds. |
| [`dns_provider_connection_in_use`](/errors/dns_provider_connection_in_use) | The DNS provider connection is still attached to a zone or held by another team. |
| [`dns_provider_connection_unavailable`](/errors/dns_provider_connection_unavailable) | The DNS provider connection is not active. |
| [`dns_provider_controlled_desired_state`](/errors/dns_provider_controlled_desired_state) | The DNS provider owns the desired record state for this zone. |
| [`dns_provider_credentials_expired`](/errors/dns_provider_credentials_expired) | The DNS provider credentials expired. |
| [`dns_provider_feature_descriptors`](/errors/dns_provider_feature_descriptors) | Forwarding, email, DNSSEC, glue, and registrar changes are provider feature actions, not record fields. |
| [`dns_provider_feature_unavailable`](/errors/dns_provider_feature_unavailable) | The domain's current DNS provider does not offer this feature action or service template. |
| [`dns_provider_field_unsupported`](/errors/dns_provider_field_unsupported) | The DNS provider does not support a field in the requested record. |
| [`dns_provider_future_authoritative_backend`](/errors/dns_provider_future_authoritative_backend) | Spacefast authoritative DNS is modeled as a provider adapter so zones can migrate per nameserver family. |
| [`dns_provider_missing_permission`](/errors/dns_provider_missing_permission) | The connected DNS provider account lacks permission on this zone. |
| [`dns_provider_not_connected`](/errors/dns_provider_not_connected) | No DNS provider zone is connected to this domain. |
| [`dns_provider_operation_failed`](/errors/dns_provider_operation_failed) | The DNS operation did not succeed at the provider. |
| [`dns_provider_permission_denied`](/errors/dns_provider_permission_denied) | The DNS provider refused the change for lack of permission. |
| [`dns_provider_rate_limited`](/errors/dns_provider_rate_limited) | The DNS provider rate limited these requests. |
| [`dns_provider_replace_all_requires_fresh_plan`](/errors/dns_provider_replace_all_requires_fresh_plan) | A replace-all DNS write needs a freshly computed plan. |
| [`dns_provider_replace_all_write_strategy`](/errors/dns_provider_replace_all_write_strategy) | This DNS provider applies writes by replacing the whole record set at a name. |
| [`dns_provider_snapshot_stale`](/errors/dns_provider_snapshot_stale) | The cached provider record snapshot is older than this write allows. |
| [`dns_provider_snapshot_unavailable`](/errors/dns_provider_snapshot_unavailable) | Provider records were read but could not be cached for listing. |
| [`dns_provider_temporarily_unavailable`](/errors/dns_provider_temporarily_unavailable) | The DNS provider is not reachable right now. |
| [`dns_provider_timeout`](/errors/dns_provider_timeout) | The DNS provider did not answer before the request timed out. |
| [`dns_provider_validation_failed`](/errors/dns_provider_validation_failed) | The DNS provider rejected the record as invalid. |
| [`dns_provider_workflow_templates`](/errors/dns_provider_workflow_templates) | Primary-domain, SSL retry, email provider, DKIM, DMARC, forwarding, and verification records belong to domain actions and service templates. |
| [`dns_provider_zone_not_found`](/errors/dns_provider_zone_not_found) | The selected provider zone is not visible through this DNS provider connection. |
| [`dns_record_conflicts_with_managed`](/errors/dns_record_conflicts_with_managed) | The record conflicts with a Spacefast-managed record at the same name. |
| [`dns_record_managed`](/errors/dns_record_managed) | The record is managed or protected, so the API will not write to it. |
| [`dns_record_not_found`](/errors/dns_record_not_found) | No DNS record with that ID exists in the zone. |
| [`domain_already_exists`](/errors/domain_already_exists) | The team or principal already holds a domain record for this hostname. |
| [`domain_bound`](/errors/domain_bound) | The domain is already bound to a Space. |
| [`domain_facet_already_managed`](/errors/domain_facet_already_managed) | Another domain record already manages this facet for the same zone cut. |
| [`domain_facet_external`](/errors/domain_facet_external) | The domain is registered at an external registrar, so this facet is not managed here. |
| [`domain_facet_not_applicable`](/errors/domain_facet_not_applicable) | The facet does not exist on this domain record. |
| [`domain_in_use`](/errors/domain_in_use) | The domain is still assigned to a Space or has DNS work in flight. |
| [`domain_lookup_rate_limited`](/errors/domain_lookup_rate_limited) | Too many domain lookup requests came from this client. |
| [`domain_not_bound`](/errors/domain_not_bound) | The domain is not assigned to a Space. |
| [`deploy_quota_exceeded`](/errors/deploy_quota_exceeded) | The owner has used its daily publish allowance. |
| [`domain_quota_exceeded`](/errors/domain_quota_exceeded) | The team reached its plan's cap on custom domains. |
| [`domain_registration_active`](/errors/domain_registration_active) | The domain's registration state blocks this action. |
| [`domain_registration_not_renewable`](/errors/domain_registration_not_renewable) | The domain has no Spacefast registration that can be renewed. |
| [`domain_reserved_suffix`](/errors/domain_reserved_suffix) | The hostname sits under a Spacefast-managed suffix and cannot be added as a custom domain. |
| [`domain_transfer_active`](/errors/domain_transfer_active) | A domain transfer or a queued DNS operation is already in flight for this domain. |
| [`domain_wildcard_label`](/errors/domain_wildcard_label) | The hostname contains a wildcard label. |
| [`domain_wildcard_not_enabled`](/errors/domain_wildcard_not_enabled) | Wildcard routing is not turned on for this domain. |
| [`download_required`](/errors/download_required) | The resource has to be downloaded before it can be used. |
| [`duplicate_version_path`](/errors/duplicate_version_path) | Two files in the publish resolve to the same version path. |
| [`elevation_not_required`](/errors/elevation_not_required) | The grant already carries every scope the elevation asked for. |
| [`email_already_claimed`](/errors/email_already_claimed) | The address already belongs to an account. |
| [`email_verification_code_invalid`](/errors/email_verification_code_invalid) | The verification code is wrong, expired, or already used up. |
| [`enforcement_policy_overlap`](/errors/enforcement_policy_overlap) | Two enforcement policy ranges overlap inside the same category. |
| [`event_payload_too_large`](/errors/event_payload_too_large) | The event body is larger than the byte cap. |
| [`event_rate_limited`](/errors/event_rate_limited) | Too many event submissions came from this address in the past minute. |
| [`expired_token`](/errors/expired_token) | The device login expired before it was approved. |
| [`feature_unavailable`](/errors/feature_unavailable) | The feature this request needs is not enabled for the team. |
| [`files_mode_does_not_support_spa`](/errors/files_mode_does_not_support_spa) | Directory listing and single-page-app fallback cannot both be on for one Space. |
| [`forbidden`](/errors/forbidden) | The credential is not allowed to perform this action. |
| [`frame_link_inactive`](/errors/frame_link_inactive) | The frame link is disabled, out of its active window, or out of uses. |
| [`frame_path_outside_link_resources`](/errors/frame_path_outside_link_resources) | The requested frame path is outside the resources the link grants. |
| [`frame_principal_required`](/errors/frame_principal_required) | Launching this frame needs a signed-in user. |
| [`frame_session_invalid`](/errors/frame_session_invalid) | The frame session does not match the Space and link it was minted for. |
| [`frame_session_stale`](/errors/frame_session_stale) | The frame link changed after this session was minted. |
| [`frame_session_target_changed`](/errors/frame_session_target_changed) | The frame link now resolves to a different target than the session holds. |
| [`frame_target_fixed`](/errors/frame_target_fixed) | The frame link already fixes its target, so the request cannot choose one. |
| [`frame_version_required`](/errors/frame_version_required) | The frame link spans every version, so the launch has to name one. |
| [`hostname_contested`](/errors/hostname_contested) | The hostname is already served by another site. |
| [`human_approval_required`](/errors/human_approval_required) | This run was parked for a person, so an agent's decision cannot settle it. |
| [`idempotency_conflict_in_progress`](/errors/idempotency_conflict_in_progress) | Another request with this idempotency key is still running. |
| [`idempotency_key_reused`](/errors/idempotency_key_reused) | This idempotency key was already used with a different request body. |
| [`incumbent_controls_dns`](/errors/incumbent_controls_dns) | The current provider still controls this domain's DNS. |
| [`ingest_admission_exceeded`](/errors/ingest_admission_exceeded) | Ingest requests to this Space were shed by the admission limiter. |
| [`inject_invalid`](/errors/inject_invalid) | The `inject` block in the Space config is not shaped as placement keys holding snippet arrays. |
| [`inject_snippet_too_large`](/errors/inject_snippet_too_large) | An `inject` snippet is larger than the per-snippet byte cap. |
| [`insufficient_scope`](/errors/insufficient_scope) | The grant does not carry a scope this operation accepts. |
| [`internal_error`](/errors/internal_error) | The request failed inside the API before it reached a result. |
| [`invalid_claim_token`](/errors/invalid_claim_token) | The claim token or Space key does not match the requested Space. |
| [`invalid_continuation_token`](/errors/invalid_continuation_token) | The continuation token is expired, malformed, or belongs to another credential. |
| [`invalid_data_location`](/errors/invalid_data_location) | The requested data location is not one the provider offers. |
| [`invalid_decision_state`](/errors/invalid_decision_state) | The confirmation decision is in a state this call cannot act on. |
| [`invalid_device_code`](/errors/invalid_device_code) | The device code is unknown to the authorization server. |
| [`invalid_domain`](/errors/invalid_domain) | The lookup input is not a domain name with a TLD. |
| [`invalid_domain_name`](/errors/invalid_domain_name) | The hostname is empty or is not a valid domain name. |
| [`invalid_elevation_request`](/errors/invalid_elevation_request) | The elevation request is missing scopes or a usable rationale. |
| [`invalid_file_path`](/errors/invalid_file_path) | A path in the request is not a safe version path. |
| [`invalid_grant`](/errors/invalid_grant) | The grant or assertion presented at the token endpoint is expired, revoked, or untrusted. |
| [`invalid_idempotency_key`](/errors/invalid_idempotency_key) | The idempotency key on this request is missing its required namespace. |
| [`invalid_publish_archive`](/errors/invalid_publish_archive) | The publish archive could not be read as a valid archive. |
| [`invalid_publish_path`](/errors/invalid_publish_path) | The publish contains a file path that is not safe to serve. |
| [`invalid_publish_payload`](/errors/invalid_publish_payload) | The publish request body is not shaped the way this publish mode requires. |
| [`invalid_request`](/errors/invalid_request) | The request body or query does not satisfy this endpoint's rules. |
| [`invalid_runtime_event`](/errors/invalid_runtime_event) | The runtime callback body is not a recognized runtime event. |
| [`invalid_space`](/errors/invalid_space) | The Space reference in the request could not be resolved. |
| [`invalid_space_mode`](/errors/invalid_space_mode) | The requested Space serving mode is not one the API accepts. |
| [`invalid_usage_bucket`](/errors/invalid_usage_bucket) | The usage bucket ends at or before it starts. |
| [`invalid_usage_correction`](/errors/invalid_usage_correction) | The correction does not line up with the usage record it corrects. |
| [`invalid_usage_window`](/errors/invalid_usage_window) | The usage window is empty, inverted, or longer than 92 days. |
| [`invalid_user_code`](/errors/invalid_user_code) | The user code is unknown or was already handled. |
| [`invalid_version_path`](/errors/invalid_version_path) | A file path in the version is not a valid version path. |
| [`invalid_webhook_events`](/errors/invalid_webhook_events) | The webhook filter list names an event that is not in the activity taxonomy. |
| [`invalid_webhook_payload`](/errors/invalid_webhook_payload) | The webhook body is not a JSON object within the size cap. |
| [`invalid_webhook_signature`](/errors/invalid_webhook_signature) | The webhook signature is missing or does not verify. |
| [`invalid_webhook_url`](/errors/invalid_webhook_url) | The webhook endpoint URL is malformed or is not HTTPS. |
| [`invalid_zero_realtime_event`](/errors/invalid_zero_realtime_event) | The Zero realtime event is not one the runtime accepts. |
| [`invalid_zero_realtime_replay_query`](/errors/invalid_zero_realtime_replay_query) | The Zero realtime replay query is not valid. |
| [`invitation_already_exists`](/errors/invitation_already_exists) | That address already has a pending invitation to this team. |
| [`invitation_email_mismatch`](/errors/invitation_email_mismatch) | The invitation was addressed to a different email than the signed-in account holds. |
| [`invitation_expired`](/errors/invitation_expired) | The invitation passed its expiry before anyone accepted it. |
| [`invitation_not_pending`](/errors/invitation_not_pending) | The invitation is not pending, so it cannot be accepted or canceled. |
| [`ip_blocked`](/errors/ip_blocked) | Requests from this network are blocked. |
| [`issuer_exists`](/errors/issuer_exists) | That token issuer is already active for another tenant. |
| [`issuer_not_active`](/errors/issuer_not_active) | The partner token issuer is registered but not active. |
| [`issuer_proof_invalid`](/errors/issuer_proof_invalid) | The issuer key-possession proof did not verify or is stale. |
| [`issuer_tenant_occupied`](/errors/issuer_tenant_occupied) | The tenant already holds a pending or active token issuer. |
| [`issuer_unknown`](/errors/issuer_unknown) | The token's issuer is not registered with Spacefast. |
| [`jetpack_licensing_rejected`](/errors/jetpack_licensing_rejected) | The Jetpack licensing API rejected the request outright. |
| [`jetpack_licensing_response_invalid`](/errors/jetpack_licensing_response_invalid) | The Jetpack licensing API answered with a body that does not match its contract. |
| [`jetpack_licensing_unavailable`](/errors/jetpack_licensing_unavailable) | The Jetpack licensing API could not be reached or did not complete the request. |
| [`job_not_found`](/errors/job_not_found) | No job with that ID exists on this Space. |
| [`job_not_promotable`](/errors/job_not_promotable) | The job is in a state that cannot be promoted. |
| [`job_not_removable`](/errors/job_not_removable) | The job is still running, so it cannot be removed. |
| [`job_not_retryable`](/errors/job_not_retryable) | The job is in a state that cannot be retried. |
| [`last_owner`](/errors/last_owner) | The action would leave a team with no owner, or the account still solely owns a paying team. |
| [`log_retention_clamped`](/errors/log_retention_clamped) | The requested log window reaches further back than the plan retains logs. |
| [`lost_domain_control`](/errors/lost_domain_control) | Domain control checks kept failing past the claim notice window, so the attachment is blocked. |
| [`maintenance_in_progress`](/errors/maintenance_in_progress) | Spacefast is in maintenance, so writes are paused while reads keep working. |
| [`malformed_policy_pattern`](/errors/malformed_policy_pattern) | The policy pattern is not a valid tool-address pattern. |
| [`malformed_tool_address`](/errors/malformed_tool_address) | The tool address is not `<connectionId>/<tool>`. |
| [`malware_detected`](/errors/malware_detected) | The uploaded content was flagged as malware. |
| [`managed_domain_protected`](/errors/managed_domain_protected) | The hostname is a managed Spacefast hostname and cannot be added as a custom domain. |
| [`manifest_body_too_large`](/errors/manifest_body_too_large) | The manifest request body is larger than the byte cap. |
| [`manifest_duplicate_path`](/errors/manifest_duplicate_path) | Two entries resolve to the same path once canonicalized. |
| [`manifest_too_many_files`](/errors/manifest_too_many_files) | The version declares more files than the plan allows. |
| [`member_already_exists`](/errors/member_already_exists) | That user is already a member of this team. |
| [`method_not_allowed`](/errors/method_not_allowed) | The route exists but does not serve this HTTP method. |
| [`missing_route_param`](/errors/missing_route_param) | A path segment in the request URL is empty. |
| [`move_target_capacity_lost`](/errors/move_target_capacity_lost) | The box chosen for this move lost its capacity before the move ran. |
| [`name_managed_by_config`](/errors/name_managed_by_config) | The Space name comes from its `sf.jsonc`, so the API will not change it. |
| [`nameserver_delegation_required`](/errors/nameserver_delegation_required) | The domain's nameservers do not point at the managed zone yet. |
| [`nameserver_divergence`](/errors/nameserver_divergence) | The nameservers observed in public DNS differ from the ones assigned to this zone. |
| [`next_version_unsupported`](/errors/next_version_unsupported) | The Next.js version in the source is below the minimum the adapter supports. |
| [`no_space_selected`](/errors/no_space_selected) | The command found no Space to act on. |
| [`noop_publish`](/errors/noop_publish) | The publish declares exactly what the live version holds, so no new version was created. |
| [`not_enrolled`](/errors/not_enrolled) | The account is not enrolled in the Spacefast private beta. |
| [`not_found`](/errors/not_found) | No resource matches the identifier in the request. |
| [`partner_preset_not_grantable`](/errors/partner_preset_not_grantable) | The `partner_admin` preset cannot be requested on a team API key. |
| [`partner_tenant_immutable_client`](/errors/partner_tenant_immutable_client) | The partner tenant's client cannot be changed after it is set. |
| [`password_already_set`](/errors/password_already_set) | The account already has a password. |
| [`password_compromised`](/errors/password_compromised) | The chosen password appears in a public breach list. |
| [`path_case_collision`](/errors/path_case_collision) | Two published routes differ only by letter case and cannot coexist on case-insensitive filesystems. |
| [`path_too_long`](/errors/path_too_long) | A file path is longer than the byte cap for canonical paths. |
| [`plan_grant_already_active`](/errors/plan_grant_already_active) | The team already holds an active grant for this plan. |
| [`plan_grant_already_revoked`](/errors/plan_grant_already_revoked) | The plan grant or add-on is already revoked. |
| [`plan_unknown`](/errors/plan_unknown) | The tenant's plan catalog has no plan by that name. |
| [`policy_exceeds_grantor`](/errors/policy_exceeds_grantor) | The requested API key policy grants more than the calling credential holds. |
| [`prebuilt_metadata_invalid`](/errors/prebuilt_metadata_invalid) | The archive's build metadata sidecar is present but unreadable. |
| [`primary_email_not_removable`](/errors/primary_email_not_removable) | The address being removed is the account's primary address. |
| [`principal_closed`](/errors/principal_closed) | The customer is closed, so its Spaces cannot be changed. |
| [`principal_has_active_spaces`](/errors/principal_has_active_spaces) | The principal still owns Spaces that are not deleted. |
| [`principal_not_found`](/errors/principal_not_found) | No external principal with that ID exists in this tenant. |
| [`principal_space_mismatch`](/errors/principal_space_mismatch) | The named principal does not own the target Space. |
| [`principal_suspended`](/errors/principal_suspended) | The customer is suspended, so changes to its Spaces are blocked. |
| [`principal_suspension_locked`](/errors/principal_suspension_locked) | Spacefast applied this suspension, so the partner cannot lift or close it. |
| [`promote_admission_exceeded`](/errors/promote_admission_exceeded) | Promotions to this Space were shed by the admission limiter. |
| [`promotion_live_content_missing`](/errors/promotion_live_content_missing) | The live tenant's system Space has no ready version whose content promotion can retain. |
| [`promotion_live_system_space_invalid`](/errors/promotion_live_system_space_invalid) | The live tenant's designated system Space is not a live Space it owns. |
| [`promotion_live_system_space_not_designated`](/errors/promotion_live_system_space_not_designated) | The live tenant has no designated system Space. |
| [`promotion_not_live_tenant`](/errors/promotion_not_live_tenant) | Promotion targets a live tenant and the caller's tenant is not live. |
| [`promotion_nothing_to_promote`](/errors/promotion_nothing_to_promote) | The test tenant's system Space has no live manifest to promote. |
| [`promotion_runtime_publish_incomplete`](/errors/promotion_runtime_publish_incomplete) | The live system Space's runtime publish did not finish. |
| [`promotion_test_twin_missing`](/errors/promotion_test_twin_missing) | This live tenant has no linked test tenant to promote from. |
| [`provider_error`](/errors/provider_error) | An upstream provider failed while serving this request. |
| [`provider_job_failed`](/errors/provider_job_failed) | A provider job behind this request failed. |
| [`provider_job_timeout`](/errors/provider_job_timeout) | A provider job behind this request did not finish in time. |
| [`provider_privilege`](/errors/provider_privilege) | The provider does not grant Spacefast permission to make the change. |
| [`provider_runtime_feature_unsupported`](/errors/provider_runtime_feature_unsupported) | The publish declares a provider runtime feature Spacefast does not execute, so it ships as inert static content. |
| [`provider_site_id_required`](/errors/provider_site_id_required) | The request did not carry a WP Cloud provider site ID. |
| [`proxy_upstream_denied`](/errors/proxy_upstream_denied) | A proxy rule points at a hostname that cannot be used as an upstream. |
| [`proxy_upstream_unresolved`](/errors/proxy_upstream_unresolved) | The proxy upstream hostname does not resolve. |
| [`publish_archive_compression_ratio_exceeded`](/errors/publish_archive_compression_ratio_exceeded) | The archive expands far more than its compressed size allows. |
| [`publish_archive_expanded_size_exceeded`](/errors/publish_archive_expanded_size_exceeded) | The archive expands to more bytes than a version may hold. |
| [`publish_archive_file_count_exceeded`](/errors/publish_archive_file_count_exceeded) | The archive holds more files than an inline publish supports. |
| [`publish_archive_too_large`](/errors/publish_archive_too_large) | The uploaded archive is larger than the inline publish body cap. |
| [`publish_base_changed`](/errors/publish_base_changed) | The Space settings changed after the base digest in this request was read. |
| [`publish_bytes_missing`](/errors/publish_bytes_missing) | The publish declared a file whose bytes never arrived. |
| [`publish_config_unsupported`](/errors/publish_config_unsupported) | The publish declares a config this endpoint does not accept. |
| [`publish_failed`](/errors/publish_failed) | Copying the version's files into the live environment failed. |
| [`publish_file_missing`](/errors/publish_file_missing) | The inline publish did not carry a file the manifest declares. |
| [`publish_hash_mismatch`](/errors/publish_hash_mismatch) | An uploaded file's hash does not match the one the manifest declares. |
| [`publish_inline_limit_exceeded`](/errors/publish_inline_limit_exceeded) | The publish is past the limits for an inline publish. |
| [`publish_not_cancelable`](/errors/publish_not_cancelable) | The publish is past the point where it can be canceled. |
| [`publish_path_collision`](/errors/publish_path_collision) | Several published files resolve to the same served route. |
| [`publish_path_invalid`](/errors/publish_path_invalid) | A path in the publish is not one the platform can serve. |
| [`publish_session_expired`](/errors/publish_session_expired) | The publish upload session expired before it finished. |
| [`publish_setup_failed`](/errors/publish_setup_failed) | Preparing the live environment for the publish failed. |
| [`publish_snapshot_empty`](/errors/publish_snapshot_empty) | The publish resolved to no files at all. |
| [`publish_upload_failed`](/errors/publish_upload_failed) | The upload session did not take every file the manifest declares. |
| [`publish_verification_failed`](/errors/publish_verification_failed) | The published version did not answer its verification request. |
| [`queue_not_found`](/errors/queue_not_found) | No queue with that name exists on this Space. |
| [`rate_limited`](/errors/rate_limited) | Too many requests came from this caller in the rate limit window. |
| [`realtime_cursor_expired`](/errors/realtime_cursor_expired) | The realtime event cursor is no longer in the retained event history. |
| [`registration_expired`](/errors/registration_expired) | The domain registration expired and is in its redemption window. |
| [`registration_expiring`](/errors/registration_expiring) | The domain registration expires soon. |
| [`repository_ref_not_found`](/errors/repository_ref_not_found) | The branch, tag, or commit you asked to read does not exist in this repository. A repository nothing has been pushed to yet answers this for its own default branch. |
| [`repository_stale_base`](/errors/repository_stale_base) | The branch moved after this change was built on it. |
| [`resource_revision_changed`](/errors/resource_revision_changed) | The resource changed after the revision in this request was read. |
| [`response_headers_unservable`](/errors/response_headers_unservable) | The response headers the runtime produced cannot be served. |
| [`response_table_too_large`](/errors/response_table_too_large) | The response's header or route table is larger than the runtime allows. |
| [`review_item_claimed`](/errors/review_item_claimed) | Another reviewer already claimed this review item. |
| [`run_replay_diverged`](/errors/run_replay_diverged) | Replaying the paused program took a different path than the first time, so it was stopped. |
| [`runtime_action_forbidden`](/errors/runtime_action_forbidden) | The runtime token does not authorize the action this request performs. |
| [`runtime_api_not_found`](/errors/runtime_api_not_found) | The runtime API route in this request does not exist. |
| [`runtime_callback_forbidden`](/errors/runtime_callback_forbidden) | The runtime callback token is invalid or is not scoped for this event. |
| [`runtime_dev_unsupported`](/errors/runtime_dev_unsupported) | The local dev server cannot serve this Space's runtime kind. |
| [`runtime_hostname_unassigned`](/errors/runtime_hostname_unassigned) | The Space has no runtime hostname assigned yet. |
| [`runtime_instance_mismatch`](/errors/runtime_instance_mismatch) | The runtime token is scoped to a different runtime instance than the one serving the request. |
| [`runtime_jti_missing`](/errors/runtime_jti_missing) | The runtime token carries no token ID. |
| [`runtime_jti_replayed`](/errors/runtime_jti_replayed) | The runtime token's ID was already used. |
| [`runtime_jwks_key_missing`](/errors/runtime_jwks_key_missing) | The signing key the runtime token names is not in the published key set. |
| [`runtime_kind_mismatch`](/errors/runtime_kind_mismatch) | The live version's runtime kind is not the one this operation works on. |
| [`runtime_management_unavailable`](/errors/runtime_management_unavailable) | The Space's runtime did not answer the management call in time. |
| [`runtime_not_provisioned`](/errors/runtime_not_provisioned) | The Space has not served a published version, so its runtime does not exist yet. |
| [`runtime_operation_missing`](/errors/runtime_operation_missing) | The runtime management token carries no operation ID. |
| [`runtime_purge_failed`](/errors/runtime_purge_failed) | The version published, but the runtime's edge purge failed and is queued for retry. |
| [`runtime_release_unverifiable`](/errors/runtime_release_unverifiable) | The runtime release could not be verified, so nothing was promoted and no box was changed. |
| [`runtime_scope_forbidden`](/errors/runtime_scope_forbidden) | The runtime token's scope claims do not match this request. |
| [`runtime_token_bad_signature`](/errors/runtime_token_bad_signature) | The runtime token's signature does not verify. |
| [`runtime_token_expired`](/errors/runtime_token_expired) | The runtime token is expired or not valid yet. |
| [`runtime_token_invalid`](/errors/runtime_token_invalid) | The runtime token is malformed. |
| [`runtime_unauthorized`](/errors/runtime_unauthorized) | The runtime API request carried no authentication. |
| [`runtime_upload_operation_not_supported`](/errors/runtime_upload_operation_not_supported) | The runtime upload lane does not serve this operation or method. |
| [`runtime_upload_required`](/errors/runtime_upload_required) | The publish still has files that have to go through the runtime upload session. |
| [`scan_pending`](/errors/scan_pending) | The content safety scan for this Space has not finished. |
| [`secret_variable_in_template`](/errors/secret_variable_in_template) | A template references a variable marked secret. |
| [`service_booting`](/errors/service_booting) | The process holding this port is still starting up. |
| [`service_signature_invalid`](/errors/service_signature_invalid) | The service-to-service signature on this request did not verify. |
| [`session_not_fresh`](/errors/session_not_fresh) | This action needs a session that was recently re-verified. |
| [`site_already_deleted`](/errors/site_already_deleted) | The provider site is already deleted. |
| [`site_required`](/errors/site_required) | The request did not name a provider site. |
| [`site_suspended`](/errors/site_suspended) | The Space is suspended, so it is not served and cannot be changed. |
| [`slow_down`](/errors/slow_down) | The device flow was polled faster than its interval allows. |
| [`slug_invalid`](/errors/slug_invalid) | The slug does not satisfy the slug rules. |
| [`slug_reserved`](/errors/slug_reserved) | The requested slug or managed hostname is reserved. |
| [`slug_unavailable`](/errors/slug_unavailable) | Another team or Space already uses that slug. |
| [`source_archive_decompression_timeout`](/errors/source_archive_decompression_timeout) | Decompressing the source archive took longer than allowed. |
| [`source_archive_expansion_ratio_exceeded`](/errors/source_archive_expansion_ratio_exceeded) | The source archive expands far more than its compressed size allows. |
| [`source_archive_validation_busy`](/errors/source_archive_validation_busy) | Source archive validation capacity is used up right now. |
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
| [`space_already_claimed`](/errors/space_already_claimed) | The Space has already been claimed by a team. |
| [`space_claim_unavailable`](/errors/space_claim_unavailable) | The Space has no active claim token, so it cannot be claimed or assigned. |
| [`space_claimed_credential_available`](/errors/space_claimed_credential_available) | The owner claimed the Space and left agent publishing on, so the Space key still exchanges once. |
| [`space_disabled`](/errors/space_disabled) | The Space is disabled, so this action is unavailable. |
| [`space_expired`](/errors/space_expired) | The anonymous Space passed its claim deadline and cannot be claimed. |
| [`space_has_active_publish`](/errors/space_has_active_publish) | A publish is already running on this Space. |
| [`space_has_active_version`](/errors/space_has_active_version) | A publish is in flight on this Space. |
| [`space_hostname_identity_missing`](/errors/space_hostname_identity_missing) | The Space has no persisted default hostname identity. |
| [`space_no_live_version`](/errors/space_no_live_version) | The Space has no live version to act on. |
| [`space_not_disabled`](/errors/space_not_disabled) | The Space is not disabled, so there is nothing to restore. |
| [`space_not_restorable`](/errors/space_not_restorable) | The Space cannot be restored: it was not deleted with this credential, or another lifecycle transition won. |
| [`space_person_already_member`](/errors/space_person_already_member) | The invited person already has access to this Space. |
| [`space_person_invitation_pending`](/errors/space_person_invitation_pending) | That address already has a pending invitation to this Space. |
| [`space_person_self_invite`](/errors/space_person_self_invite) | The invitation names the person sending it. |
| [`space_ref_ambiguous`](/errors/space_ref_ambiguous) | The hostname is attached to more than one Space. |
| [`space_ref_required`](/errors/space_ref_required) | The request did not name a Space. |
| [`space_selection_conflict`](/errors/space_selection_conflict) | `--access` applies only when a publish creates a Space, and this directory is already linked to one. |
| [`space_transferring`](/errors/space_transferring) | A transfer is in flight on this Space, or its ownership changed mid-transfer. |
| [`space_unclaimed`](/errors/space_unclaimed) | The Space is anonymous, so it has no owner this operation can act for. |
| [`ssl_renewal_blocked`](/errors/ssl_renewal_blocked) | A DNS record, often a CAA record, is blocking certificate issuance for this hostname. |
| [`static_control_file_not_supported`](/errors/static_control_file_not_supported) | The publish contains an execution-control file a static publish cannot upload. |
| [`static_runtime_control_path_not_supported`](/errors/static_runtime_control_path_not_supported) | The publish contains a reserved runtime control path a static publish cannot upload. |
| [`static_runtime_required`](/errors/static_runtime_required) | This operation only applies to a static Space. |
| [`storage_auth_required`](/errors/storage_auth_required) | The storage request carried no signed-in identity. |
| [`storage_bucket_unavailable`](/errors/storage_bucket_unavailable) | No usable storage bucket is configured for this operation. |
| [`storage_content_blocked`](/errors/storage_content_blocked) | The upload's content type is executable or active web content. |
| [`storage_delete_forbidden`](/errors/storage_delete_forbidden) | Only the uploader can delete this storage object. |
| [`storage_empty_file`](/errors/storage_empty_file) | The storage upload carried no bytes. |
| [`storage_file_too_large`](/errors/storage_file_too_large) | The storage upload is larger than the per-object byte cap. |
| [`storage_key_invalid`](/errors/storage_key_invalid) | The storage object ID is not a valid object identifier. |
| [`storage_object_not_found`](/errors/storage_object_not_found) | No storage object with that ID exists on this Space. |
| [`space_quota_exceeded`](/errors/space_quota_exceeded) | Creating or claiming this space would exceed the owner's space allowance. |
| [`storage_quota_exceeded`](/errors/storage_quota_exceeded) | The Space or principal is at its storage quota. |
| [`storage_unavailable`](/errors/storage_unavailable) | Storage could not read or persist the object for this Space. |
| [`stripe_error`](/errors/stripe_error) | Stripe rejected the billing request. |
| [`superadmin_two_factor_required`](/errors/superadmin_two_factor_required) | The user has no two-factor authentication enrolled. |
| [`superadmin_wpcom_account_required`](/errors/superadmin_wpcom_account_required) | The user has no linked WordPress.com account. |
| [`superseded_by_publish`](/errors/superseded_by_publish) | A newer publish replaced the version this request targets. |
| [`system_space_conflict`](/errors/system_space_conflict) | The system Space changed after the base value in this request was read. |
| [`system_space_invalid`](/errors/system_space_invalid) | The chosen system Space is not a live, enabled Space this team or tenant owns. |
| [`takeover_notice_window`](/errors/takeover_notice_window) | The hostname takeover is still inside its notice window. |
| [`team_member_quota_exceeded`](/errors/team_member_quota_exceeded) | The team is at its seat limit, counting members and pending invitations. |
| [`team_ref_required`](/errors/team_ref_required) | The request did not name a team. |
| [`team_required`](/errors/team_required) | This operation needs a team-owned resource or an explicit team. |
| [`team_scope_mismatch`](/errors/team_scope_mismatch) | The credential acts for a different team than the request names. |
| [`team_slug_conflict`](/errors/team_slug_conflict) | Another team already uses that slug. |
| [`template_file_too_large`](/errors/template_file_too_large) | A template file is larger than the template byte cap. |
| [`template_not_in_version`](/errors/template_not_in_version) | A `templates` entry names a file this version does not publish, so it was skipped. |
| [`template_variable_unresolved`](/errors/template_variable_unresolved) | A template references a variable that is not defined. |
| [`tenant_id_mismatch`](/errors/tenant_id_mismatch) | The tenant in the request does not match the one the credential acts for. |
| [`tenant_not_found`](/errors/tenant_not_found) | No tenant matches the identifier in the request. |
| [`tenant_not_granted`](/errors/tenant_not_granted) | The credential is not granted the tenant this request addresses. |
| [`tenant_past_due`](/errors/tenant_past_due) | The account is past due, so changes are blocked while serving continues through the grace period. |
| [`tenant_selection_required`](/errors/tenant_selection_required) | The credential spans several tenants, so this request is ambiguous. |
| [`tenant_suspended`](/errors/tenant_suspended) | The account is suspended, so changes are blocked. |
| [`theme_value_invalid`](/errors/theme_value_invalid) | A theme value in the Space config is not one the runtime accepts. |
| [`token_alg_invalid`](/errors/token_alg_invalid) | The partner token is signed with an algorithm the API does not accept. |
| [`token_audience_mismatch`](/errors/token_audience_mismatch) | The partner token's `aud` claim does not match the audience registered for the issuer. |
| [`token_claims_invalid`](/errors/token_claims_invalid) | The partner token's claims did not pass validation. |
| [`token_header_forbidden`](/errors/token_header_forbidden) | The partner token carries a forbidden JOSE header. |
| [`token_malformed`](/errors/token_malformed) | The partner token is not a well-formed JWT. |
| [`token_signature_invalid`](/errors/token_signature_invalid) | The partner token's signature did not verify against the issuer's keys. |
| [`token_subject_invalid`](/errors/token_subject_invalid) | The partner token's `sub` claim is not a normalized lowercase principal ID. |
| [`token_ttl_invalid`](/errors/token_ttl_invalid) | The partner token is expired, not yet valid, or lives longer than the maximum lifetime. |
| [`token_type_invalid`](/errors/token_type_invalid) | The partner token's `typ` header is not the expected token type. |
| [`transfer_cross_tenant_unsupported`](/errors/transfer_cross_tenant_unsupported) | The transfer would move the Space to a team in another tenant. |
| [`transfer_not_cancelable`](/errors/transfer_not_cancelable) | The transfer is past the point where it can be canceled. |
| [`transfer_push_failed`](/errors/transfer_push_failed) | Pushing the transfer to the receiving side failed. |
| [`transfer_source_changed`](/errors/transfer_source_changed) | The Space's owner changed after the transfer was created, so it cannot be applied. |
| [`transfer_target_same_as_source`](/errors/transfer_target_same_as_source) | The transfer's receiving principal is the one that already owns the Space. |
| [`transfer_verify_failed`](/errors/transfer_verify_failed) | Verifying the transfer with the receiving side failed. |
| [`unauthorized`](/errors/unauthorized) | The request carried no usable credential. |
| [`unsupported_publish_media_type`](/errors/unsupported_publish_media_type) | The publish body's content type is not one the endpoint accepts. |
| [`upload_hash_mismatch`](/errors/upload_hash_mismatch) | The uploaded bytes do not hash to the SHA-256 the manifest declares. |
| [`upload_path_not_canonical`](/errors/upload_path_not_canonical) | The upload request path is not canonically encoded. |
| [`upload_path_not_declared`](/errors/upload_path_not_declared) | The uploaded path was not declared in this publish session's manifest. |
| [`upload_size_mismatch`](/errors/upload_size_mismatch) | The uploaded bytes do not match the size the manifest declares. |
| [`usage_period_not_found`](/errors/usage_period_not_found) | No usage period matches the identifier in the request. |
| [`user_banned`](/errors/user_banned) | The user is banned, so their access was disconnected. |
| [`validation_error`](/errors/validation_error) | The request did not satisfy the schema for this endpoint. |
| [`verification_required`](/errors/verification_required) | DNS control for this hostname has to be proven before it keeps serving. |
| [`version_already_live`](/errors/version_already_live) | The version is already the live one on this channel. |
| [`version_artifact_not_found`](/errors/version_artifact_not_found) | The version does not carry the requested convention artifact. |
| [`version_busy`](/errors/version_busy) | The version is finalizing, so it cannot be changed or deleted yet. |
| [`version_canceled`](/errors/version_canceled) | The version was canceled before it went live. |
| [`version_closed`](/errors/version_closed) | The version is past the state where it accepts uploads or refreshed instructions. |
| [`version_expired`](/errors/version_expired) | The draft version expired before it was finalized. |
| [`version_failed`](/errors/version_failed) | The version failed before it went live. |
| [`version_file_count_exceeded`](/errors/version_file_count_exceeded) | The version declares more files than the plan allows. |
| [`version_file_not_found`](/errors/version_file_not_found) | The version does not carry that file in the requested view. |
| [`version_file_too_large`](/errors/version_file_too_large) | A file in the version is larger than the plan's per-file byte limit. |
| [`version_files_missing`](/errors/version_files_missing) | Files the version declared were missing from runtime storage at finalize. |
| [`version_in_use`](/errors/version_in_use) | A channel, branch alias, or reusing draft still points at this version. |
| [`version_live`](/errors/version_live) | The version is the live one on its channel. |
| [`version_not_finalizable`](/errors/version_not_finalizable) | The draft's base moved or its source is not recoverable, so it cannot finalize. |
| [`version_not_found`](/errors/version_not_found) | No version with that ID exists on this Space. |
| [`version_not_prepared`](/errors/version_not_prepared) | The version has not been prepared for this operation yet. |
| [`version_not_promotable`](/errors/version_not_promotable) | The version is in a state that cannot be promoted. |
| [`version_not_ready`](/errors/version_not_ready) | The version is not in a state this operation accepts. |
| [`version_total_bytes_exceeded`](/errors/version_total_bytes_exceeded) | The version's files total more bytes than the plan allows. |
| [`webhook_delivery_budget_exceeded`](/errors/webhook_delivery_budget_exceeded) | The account used up its hourly webhook delivery budget. |
| [`webhook_managed_by_manifest`](/errors/webhook_managed_by_manifest) | The webhook is declared in the tenant's system-Space manifest, so the API will not edit it. |
| [`whois_unavailable`](/errors/whois_unavailable) | No WHOIS or RDAP record was returned for the domain. |
| [`wp_cli_timeout`](/errors/wp_cli_timeout) | The WP-CLI command did not finish inside its deadline and may still be running on the site. |
| [`wp_cloud_assignment_kind_mismatch`](/errors/wp_cloud_assignment_kind_mismatch) | The provider site's kind does not match the assignment being made. |
| [`wp_cloud_assignment_space_mismatch`](/errors/wp_cloud_assignment_space_mismatch) | The Space or the provider site is already bound to a different partner. |
| [`wp_cloud_assignment_team_mismatch`](/errors/wp_cloud_assignment_team_mismatch) | The provider site belongs to a different team than the assignment names. |
| [`wp_cloud_client_in_use`](/errors/wp_cloud_client_in_use) | The WP Cloud client still has sites or assignments attached. |
| [`wp_cloud_client_not_found`](/errors/wp_cloud_client_not_found) | No WP Cloud client matches the identifier in the request. |
| [`wp_cloud_site_still_assigned`](/errors/wp_cloud_site_still_assigned) | The WP Cloud site is still bound to a Space or placement. |
| [`wp_cloud_webhook_secret_not_configured`](/errors/wp_cloud_webhook_secret_not_configured) | The WP Cloud webhook verification key is not configured on the server. |
| [`zero_ai_unavailable`](/errors/zero_ai_unavailable) | The AI service is not configured for this runtime. |
| [`zero_artifact_abi_mismatch`](/errors/zero_artifact_abi_mismatch) | The Zero artifact was built against a different runtime ABI than the box runs. |
| [`zero_artifact_invalid`](/errors/zero_artifact_invalid) | The Zero run artifact is malformed. |
| [`zero_artifact_malformed`](/errors/zero_artifact_malformed) | The Zero artifact could not be parsed. |
| [`zero_artifact_path_invalid`](/errors/zero_artifact_path_invalid) | The Zero artifact path in the compiled index is not a safe path. |
| [`zero_artifact_unreadable`](/errors/zero_artifact_unreadable) | The Zero artifact could not be read from the version. |
| [`zero_auth_unavailable`](/errors/zero_auth_unavailable) | Zero hosted auth is not configured for this Space. |
| [`zero_blob_key_invalid`](/errors/zero_blob_key_invalid) | The blob key is empty or is not a string. |
| [`zero_blob_store_full`](/errors/zero_blob_store_full) | The local blob store is at its key limit. |
| [`zero_blob_too_large`](/errors/zero_blob_too_large) | The blob value is larger than the local byte limit. |
| [`zero_blob_value_invalid`](/errors/zero_blob_value_invalid) | The blob value is neither bytes nor a string. |
| [`zero_bootstrap_encode_failed`](/errors/zero_bootstrap_encode_failed) | The Zero bootstrap payload could not be encoded. |
| [`zero_bytecode_hash_mismatch`](/errors/zero_bytecode_hash_mismatch) | The Zero bytecode does not hash to what the compiled index declares. |
| [`zero_bytecode_invalid`](/errors/zero_bytecode_invalid) | The Zero bytecode could not be loaded. |
| [`zero_bytecode_path_invalid`](/errors/zero_bytecode_path_invalid) | The Zero bytecode path in the compiled index is not a safe path. |
| [`zero_bytecode_unreadable`](/errors/zero_bytecode_unreadable) | The Zero bytecode could not be read from the version. |
| [`zero_capabilities_encode_failed`](/errors/zero_capabilities_encode_failed) | The Zero capability set could not be encoded for the handler. |
| [`zero_client_bundle_not_loaded`](/errors/zero_client_bundle_not_loaded) | The Zero client bundle is not loaded on this runtime. |
| [`zero_db_connect_failed`](/errors/zero_db_connect_failed) | The Zero database connection could not be established. |
| [`zero_db_execute_failed`](/errors/zero_db_execute_failed) | The Zero database rejected the mutation. |
| [`zero_db_export_cursor_invalid`](/errors/zero_db_export_cursor_invalid) | The export cursor does not fit this table and schema. |
| [`zero_db_export_failed`](/errors/zero_db_export_failed) | The database export did not return usable rows. |
| [`zero_db_export_page_too_large`](/errors/zero_db_export_page_too_large) | The export page is larger than 16 MiB. |
| [`zero_db_export_query_invalid`](/errors/zero_db_export_query_invalid) | The export query is invalid or its schema hash is stale. |
| [`zero_db_export_schema_changed`](/errors/zero_db_export_schema_changed) | The database schema changed while the export was running. |
| [`zero_db_export_schema_unavailable`](/errors/zero_db_export_schema_unavailable) | The capsule has no stable schema hash, so a complete export cannot be fenced. |
| [`zero_db_host_install_failed`](/errors/zero_db_host_install_failed) | Installing the database host for this Space failed. |
| [`zero_db_operation_invalid`](/errors/zero_db_operation_invalid) | The Zero database operation could not be parsed or encoded. |
| [`zero_db_operation_too_large`](/errors/zero_db_operation_too_large) | The Zero database operation is larger than the request size limit. |
| [`zero_db_param_invalid`](/errors/zero_db_param_invalid) | A Zero database parameter is not a scalar JSON value. |
| [`zero_db_query_failed`](/errors/zero_db_query_failed) | The Zero database rejected the query. |
| [`zero_db_row_invalid`](/errors/zero_db_row_invalid) | A row returned by the Zero database could not be decoded. |
| [`zero_db_sql_invalid`](/errors/zero_db_sql_invalid) | The statement's SQL is empty or contains a null byte. |
| [`zero_db_target_denied`](/errors/zero_db_target_denied) | The database URL points at a host the runtime will not connect to. |
| [`zero_db_tls_required`](/errors/zero_db_tls_required) | The database connection has to use TLS. |
| [`zero_db_too_many_params`](/errors/zero_db_too_many_params) | The statement carries more parameters than the broker allows. |
| [`zero_db_transaction_active`](/errors/zero_db_transaction_active) | A Zero database transaction is already open on this connection. |
| [`zero_db_transaction_commit_failed`](/errors/zero_db_transaction_commit_failed) | Committing the Zero database transaction failed. |
| [`zero_db_transaction_invalid`](/errors/zero_db_transaction_invalid) | The transaction declares no statements, or more than the maximum. |
| [`zero_db_transaction_missing`](/errors/zero_db_transaction_missing) | No Zero database transaction is open on this connection. |
| [`zero_db_transaction_rollback_failed`](/errors/zero_db_transaction_rollback_failed) | Rolling back the Zero database transaction failed. |
| [`zero_db_transaction_start_failed`](/errors/zero_db_transaction_start_failed) | Starting the Zero database transaction failed. |
| [`zero_db_url_invalid`](/errors/zero_db_url_invalid) | The database URL or its source label is not one the runtime accepts. |
| [`zero_db_url_missing`](/errors/zero_db_url_missing) | No database URL is configured for this Space's Zero endpoints. |
| [`zero_dev_endpoint_failed`](/errors/zero_dev_endpoint_failed) | The Zero endpoint threw while the local dev server was serving it. |
| [`zero_dump_query_invalid`](/errors/zero_dump_query_invalid) | The database dump query parameters are invalid. |
| [`zero_email_unavailable`](/errors/zero_email_unavailable) | The email service is not configured for this runtime. |
| [`zero_endpoint_compile_failed`](/errors/zero_endpoint_compile_failed) | A Zero endpoint failed to compile. |
| [`zero_endpoint_conflict`](/errors/zero_endpoint_conflict) | Two Zero endpoints claim the same route. |
| [`zero_endpoint_duplicate`](/errors/zero_endpoint_duplicate) | The same Zero endpoint is declared more than once. |
| [`zero_endpoint_id_duplicate`](/errors/zero_endpoint_id_duplicate) | Two Zero endpoints share the same ID. |
| [`zero_endpoint_index_invalid`](/errors/zero_endpoint_index_invalid) | The compiled Zero endpoint index does not satisfy its schema. |
| [`zero_endpoint_index_malformed`](/errors/zero_endpoint_index_malformed) | The compiled Zero endpoint index could not be parsed. |
| [`zero_endpoint_index_path_invalid`](/errors/zero_endpoint_index_path_invalid) | The Zero endpoint index path is not a safe path. |
| [`zero_endpoint_index_unreadable`](/errors/zero_endpoint_index_unreadable) | The Zero endpoint index could not be read from the version. |
| [`zero_endpoint_invalid`](/errors/zero_endpoint_invalid) | A Zero endpoint entry is not shaped the way the runtime expects. |
| [`zero_endpoint_mismatch`](/errors/zero_endpoint_mismatch) | The requested Zero endpoint does not match the one the compiled index holds. |
| [`zero_endpoint_not_found`](/errors/zero_endpoint_not_found) | The compiled run index has no handler for this Zero endpoint. |
| [`zero_endpoints_invalid`](/errors/zero_endpoints_invalid) | The finalize request's `zero_endpoints` value is not an array. |
| [`zero_endpoints_too_many`](/errors/zero_endpoints_too_many) | The capsule declares more Zero endpoints than the runtime allows. |
| [`zero_envelope_encode_failed`](/errors/zero_envelope_encode_failed) | The Zero request envelope could not be encoded for the runner. |
| [`zero_gravatar_unavailable`](/errors/zero_gravatar_unavailable) | The Gravatar service is not configured for this runtime. |
| [`zero_js_context_init_failed`](/errors/zero_js_context_init_failed) | The JavaScript context for the Zero handler could not be created. |
| [`zero_js_execution_failed`](/errors/zero_js_execution_failed) | The Zero handler threw while it was running. |
| [`zero_js_execution_timeout`](/errors/zero_js_execution_timeout) | The Zero handler ran past its execution time limit. |
| [`zero_js_globals_failed`](/errors/zero_js_globals_failed) | The Zero handler's globals could not be installed. |
| [`zero_js_response_malformed`](/errors/zero_js_response_malformed) | The Zero handler returned a value the runtime cannot serve as a response. |
| [`zero_js_runtime_init_failed`](/errors/zero_js_runtime_init_failed) | The JavaScript runtime for the Zero handler could not start. |
| [`zero_log_query_invalid`](/errors/zero_log_query_invalid) | The log query parameters are invalid. |
| [`zero_method_not_allowed`](/errors/zero_method_not_allowed) | The Zero run route was called with a method it does not serve. |
| [`zero_migration_failed`](/errors/zero_migration_failed) | A Zero database migration failed to apply. |
| [`zero_query_name_missing`](/errors/zero_query_name_missing) | The Zero query call did not name a query. |
| [`zero_realtime_forbidden`](/errors/zero_realtime_forbidden) | The realtime replay token is not valid for this Space and live version. |
| [`zero_realtime_message_invalid`](/errors/zero_realtime_message_invalid) | The realtime message is not one the protocol defines. |
| [`zero_realtime_operation_unsupported`](/errors/zero_realtime_operation_unsupported) | The realtime operation is not one this runtime serves. |
| [`zero_realtime_query_invalid`](/errors/zero_realtime_query_invalid) | The realtime event query parameters are invalid. |
| [`zero_realtime_space_required`](/errors/zero_realtime_space_required) | The realtime connection did not name a Space. |
| [`zero_realtime_unavailable`](/errors/zero_realtime_unavailable) | Realtime is not available for this Space. |
| [`zero_realtime_websocket_forbidden`](/errors/zero_realtime_websocket_forbidden) | The realtime WebSocket handshake was refused. |
| [`zero_replay_failed`](/errors/zero_replay_failed) | The realtime replay request to the upstream failed. |
| [`zero_replay_query_invalid`](/errors/zero_replay_query_invalid) | The realtime replay query is larger than the byte limit, or is otherwise invalid. |
| [`zero_replay_unavailable`](/errors/zero_replay_unavailable) | Realtime replay is not configured for this Space. |
| [`zero_request_body_too_large`](/errors/zero_request_body_too_large) | The Zero request body is larger than the runtime's limit. |
| [`zero_response_header_forbidden`](/errors/zero_response_header_forbidden) | The handler set a response header the runtime will not serve. |
| [`zero_response_header_invalid`](/errors/zero_response_header_invalid) | A response header the handler set is not a valid header. |
| [`zero_response_too_large`](/errors/zero_response_too_large) | The handler's response is larger than the runtime serves. |
| [`zero_routes_invalid`](/errors/zero_routes_invalid) | The capsule's compiled route table is not valid. |
| [`zero_run_compile_failed`](/errors/zero_run_compile_failed) | A Zero run handler failed to compile. |
| [`zero_run_duplicate`](/errors/zero_run_duplicate) | The same Zero run handler is declared more than once. |
| [`zero_run_invalid`](/errors/zero_run_invalid) | A Zero run handler entry is not shaped the way the runtime expects. |
| [`zero_run_operation_unsupported`](/errors/zero_run_operation_unsupported) | The Zero run operation has no generated run handler. |
| [`zero_runner_envelope_invalid`](/errors/zero_runner_envelope_invalid) | The runner returned an envelope the runtime cannot read. |
| [`zero_runner_failed`](/errors/zero_runner_failed) | The Zero runner exited non-zero or the handler answered with a failure status. |
| [`zero_runner_invalid_body`](/errors/zero_runner_invalid_body) | The Zero runner returned a body that is not a string or valid base64. |
| [`zero_runner_invalid_response`](/errors/zero_runner_invalid_response) | The Zero runner's output could not be parsed as a response envelope. |
| [`zero_runner_invalid_status`](/errors/zero_runner_invalid_status) | The Zero runner returned a status outside 100 to 599. |
| [`zero_runner_protocol_unsupported`](/errors/zero_runner_protocol_unsupported) | The runner speaks a protocol version this runtime does not serve. |
| [`zero_runner_response_encode_failed`](/errors/zero_runner_response_encode_failed) | The runner's response could not be encoded. |
| [`zero_runner_stdin_invalid`](/errors/zero_runner_stdin_invalid) | The runner could not read the request it was handed. |
| [`zero_runner_stdin_too_large`](/errors/zero_runner_stdin_too_large) | The request handed to the runner is larger than its input limit. |
| [`zero_runner_unavailable`](/errors/zero_runner_unavailable) | The Zero runner process could not be started. |
| [`zero_runs_invalid`](/errors/zero_runs_invalid) | The finalize request's `zero_runs` value is not an array. |
| [`zero_runs_require_runtime_compiler`](/errors/zero_runs_require_runtime_compiler) | The capsule declares run handlers but was published without the runtime compiler. |
| [`zero_runs_too_many`](/errors/zero_runs_too_many) | The capsule declares more Zero run handlers than the runtime allows. |
| [`zero_spam_unavailable`](/errors/zero_spam_unavailable) | The spam service is not configured for this runtime. |
