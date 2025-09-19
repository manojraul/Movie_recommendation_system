<!DOCTYPE html>
<!-- saved from url=(0104)https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57 -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-js-focus-visible="" data-turbo-loaded=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style><style>
:root {
  --fontStack-monospace: "Monaspace Neon", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
}
</style>




  
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/light-6448649c7147.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/dark-d17b946fc2c5.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-42fc7e3b06b7.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-44cfaf0c8f7b.css"><link data-color-theme="light_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind_high_contrast-979217efd93e.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-4d5383026bfa.css"><link data-color-theme="light_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia_high_contrast-ff6ff8532348.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-1b924088c83a.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-654786382462.css"><link data-color-theme="dark_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind_high_contrast-ecca008c6f6e.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-fff376053989.css"><link data-color-theme="dark_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia_high_contrast-49adf52571e5.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-66d97c13c98a.css"><link data-color-theme="dark_dimmed_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed_high_contrast-c58f1d0432b9.css">

  <style type="text/css">
    :root {
      --tab-size-preference: 4;
    }

    pre, code {
      tab-size: var(--tab-size-preference);
    }
  </style>

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-primitives-dc7ca6859caf.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-f96b923db733.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/global-2744ca59d025.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/github-efdc4f8b5091.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/repository-5d735668c600.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/code-9c9b8dc61e74.css">

  

  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["alternate_user_config_repo","api_insights_show_missing_data_banner","attestations_filtering","attestations_sorting","billing_fixed_amount_metered_configured_discounts","billing_hard_budget_limits_for_licenses","billing_show_top_100_users_usage_table","client_version_header","codespaces_prebuild_region_target_update","contact_requests_implicit_opt_in","contact_sales_locale_utm_medium","contentful_lp_enterprise","contentful_lp_footnotes","copilot_agent_prefetch_tasks","copilot_agent_task_caching","copilot_agent_tasks_btn_code_nav","copilot_agent_tasks_btn_code_view","copilot_agent_tasks_btn_code_view_lines","copilot_agent_tasks_btn_file_reference","copilot_api_agentic_issue_marshal_yaml","copilot_api_draft_issue_code_search","copilot_capi_error_response_telemetry","copilot_chat_attach_multiple_images","copilot_chat_disable_model_picker_while_streaming","copilot_chat_file_redirect","copilot_chat_group_notifications","copilot_chat_opening_thread_switch","copilot_chat_reduce_quota_checks","copilot_chat_search_bar_redirect","copilot_chat_selection_attachments","copilot_chat_vision_in_claude","copilot_chat_vision_skip_thread_create","copilot_coding_agent_diff_stats","copilot_custom_copilots_feature_preview","copilot_custom_copilots_images","copilot_disable_generated_commit_description","copilot_duplicate_thread","copilot_features_raycast_logo","copilot_free_to_paid_telem","copilot_ftp_hyperspace_upgrade_prompt","copilot_ftp_settings_upgrade","copilot_ftp_upgrade_to_pro_from_models","copilot_ftp_your_copilot_settings","copilot_generate_commit_message_blob_public_preview","copilot_global_overlay_v2","copilot_immersive_agent_branch_selection","copilot_immersive_structured_model_picker","copilot_issue_list_show_more","copilot_loops_share_button","copilot_no_floating_button","copilot_pipes_github_graphql_nodes","copilot_premium_request_quotas","copilot_read_shared_conversation","copilot_share_active_subthread","copilot_show_copilot_sub_issues_button_on_issues_page","copilot_spaces_input_menu_select","copilot_spark_allow_empty_commit","copilot_spark_progressive_error_handling","copilot_spark_single_user_iteration","copilot_spark_use_billing_headers","copilot_spark_write_iteration_history_to_git","copilot_stable_conversation_view","copilot_workbench_agent_seed_tool","copilot_workbench_cache","copilot_workbench_connection_reload_banner","copilot_workbench_preview_analytics","copilot_workbench_ratelimit_fallback","copilot_workbench_refresh_on_wsod","copilot_workbench_synthetic_generation","custom_copilots_capi_mode","dashboard_public_preview","direct_to_salesforce","dotcom_chat_client_side_skills","failbot_report_error_react_apps_on_page","fgpat_permissions_selector_redesign","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","github_models_scheduled_hydro_events","global_nav_copilot_a11y_fix","global_nav_reductive_user_menu","global_search_multi_orgs","global_sso_banner","hpc_improve_dom_insertion_observer","hyperspace_diff_view","inp_reduced_threshold","insert_before_patch","issue_fields_report_usage","issues_expanded_file_types","issues_react_blur_item_picker_on_close","issues_react_bots_timeline_pagination","issues_react_include_bots_in_pickers","issues_react_prohibit_title_fallback","issues_react_remove_placeholders","issues_react_select_panel_fullscreen_on_narrow","issues_sticky_sidebar","item_picker_issue_type_relay_migration","item_picker_label_relay_migration","item_picker_mutations_relay_migration","item_picker_project_relay_migration","kb_semantic_api_migration","lifecycle_label_name_updates","link_contact_sales_swp_marketo","marketing_pages_search_explore_provider","mcp_registry_install","memex_mwl_filter_field_delimiter","memex_roadmap_drag_style","migrate_toasts_to_banners_web_notifications","new_traffic_page_banner","org_repos_page_route","override_pulse_legacy_url","primer_react_segmented_control_tooltip","primer_react_unified_portal_root","record_sso_banner_metrics","releases_update_ref_selector","remove_child_patch","repos_insights_remove_new_url","repository_suggester_elastic_search","sample_network_conn_type","scheduled_reminders_updated_limits","show_edit_on_default_option","site_homepage_contentful","site_msbuild_webgl_hero","spark_commit_on_default_branch","spark_show_data_access_on_publish","spark_sync_repository_after_iteration","viewscreen_sandbox","webp_support","workbench_default_sonnet4","workbench_store_readonly"],"login":"manojraul","copilotApiOverrideUrl":"https://api.individual.githubcopilot.com"}</script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/wp-runtime-73290ce42e5c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-468bf7cab607.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-2f4e04-280c10ec004d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-c8eeba-690858154b11.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/environment-e36acb721009.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-7e8c9c5d642d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-7e4d99c9171d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_relative-time-element_dist_index_js-c98257dc79a7.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-0d7d60-9ac2b374b638.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_text-expander-element_dist_index_js-754f5b5e9e7e.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-fd008e5636c7.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_markdown-toolbar-element_dist_index_js-d41270eb61be.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-c63e9a-b1f4633cac7f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/github-elements-c65a1055a366.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/element-registry-e7549719a34a.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_hydro-analytics-c-2a6094-2f3b5bfd7e3b.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-4e90f1d1076c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_lit-html_lit-html_js-06c8637a6071.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_morphdom_dist_morphdom-esm_js-node_modules_swc_helpers_esm__define_property_js-5c587dccb470.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-8eb9b2209bcd.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-cd5d89ebdb50.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-590a09-91fdc8802bfa.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_document-metadata_document-metadata_ts-packages_failbot_failbot_ts-b8e9eefcce78.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_updatable-content_updatable-content_ts-a743e72edcf2.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_details-6493f1-5af0195d8874.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_throttled-input_ts-047775-82bfe789bb2f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-6bc7a8849328.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/behaviors-2146aa3dcd3f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-ef6d0f-641e2ed302b3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/notifications-global-f5c28dea1388.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_virtualized-list_es_inde-8b3def-5e84a4d714f0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-970f7d-7c635f3a5fee.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/app_assets_modules_github_ref-selector_ts-98da180bcdc4.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/codespaces-d537a7dd382d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-3eebbd-154278e19722.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_delegated-events_di-e161aa-34194327b80d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_remote--abdaf7-e83eee3cdca9.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/repositories-1210f79a59a5.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-96937f-07580acb275f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/code-menu-f0fbee92a5e1.js.download" defer="defer"></script>








<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_hydro-analytics-client_dist_analytics-client_js-node_modules_gith-320808-1c166cd40521.js.download" defer="defer"></script>

<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_agent-sessions_utils_elapsed-time-util_ts-packages_agent-sessions_contexts_PullConte-004f94-d7a7dfdb1b4e.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-coding-agent-status_entry_ts-packages_fetch-headers_fetch-headers_ts-package-442e79-9082f1f526b7.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/copilot-coding-agent-status-ce975e97e8fb.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/copilot-coding-agent-status.18a276928d4b7c45824e.module.css">
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/notifications-subscriptions-menu.44a4ce5e60cfd5c27b1a.module.css">


  



  
  
  
  

    
  


  


    


  
  

  
  

    



  

  




    

  

    

    

      

      

    
    
    

      
  
  


      
      


      


      
      
      

        


  <meta http-equiv="x-pjax-version" content="16621c6947e2b3924b930560d8f651a8c9053dbeffa5b9a9a08848908db5f6b3" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="c922ef32c4ab94f8b870c62883f3e41755ec705db76ec4efb0d343458f1e28c7" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="0bc51a290919c52cc62b3d8b4eed96609edf264f742d0409c975553b0cdc84a8" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="ffa39e7e693fb881fb43b8081f0877da546448f82f1a7f76519815ba46d18ef7" data-turbo-track="reload">

  

      
  

  



      


    


  

  

  
  

  
  
  




  
  

  

  <link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-repos-overview.7ea6d670be60f1a7cf5c.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-keyboard-shortcuts-dialog.2de9c7d6456a311fce49.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-notifications-subscriptions-menu.44a4ce5e60cfd5c27b1a.module.css" crossorigin="anonymous"><style data-styled="active" data-styled-version="5.3.11"></style><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-global-copilot-menu.e8b96f8e81aaf397c759.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-global-create-menu.091342d12267a9316908.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-global-user-nav-drawer.04e117190f24a25f4c1c.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./script_files/packages_code-view-shared_components_files-search_FileResultsList_tsx.b19b01413b9b7d1dd458.module.css" crossorigin="anonymous"><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link rel="stylesheet" type="text/css" href="./script_files/lazy-react-partial-copilot-chat.8e2380d40284e1ff7b9d.module.css" crossorigin="anonymous"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/packages_use-client-value_use-client-value_ts-packages_issue-create_dialog_CreateIssueDialogE-144424.5cd1e2bbb103f9088cf2.module.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/commits.8755333b6f68991dc3e6.module.css"><script type="application/json" id="client-env">{"locale":"en","featureFlags":["alternate_user_config_repo","api_insights_show_missing_data_banner","attestations_filtering","attestations_sorting","billing_fixed_amount_metered_configured_discounts","billing_hard_budget_limits_for_licenses","billing_show_top_100_users_usage_table","client_version_header","codespaces_prebuild_region_target_update","contact_requests_implicit_opt_in","contact_sales_locale_utm_medium","contentful_lp_enterprise","contentful_lp_footnotes","copilot_agent_prefetch_tasks","copilot_agent_task_caching","copilot_agent_tasks_btn_code_nav","copilot_agent_tasks_btn_code_view","copilot_agent_tasks_btn_code_view_lines","copilot_agent_tasks_btn_file_reference","copilot_api_agentic_issue_marshal_yaml","copilot_api_draft_issue_code_search","copilot_capi_error_response_telemetry","copilot_chat_attach_multiple_images","copilot_chat_disable_model_picker_while_streaming","copilot_chat_file_redirect","copilot_chat_group_notifications","copilot_chat_opening_thread_switch","copilot_chat_reduce_quota_checks","copilot_chat_search_bar_redirect","copilot_chat_selection_attachments","copilot_chat_vision_in_claude","copilot_chat_vision_skip_thread_create","copilot_coding_agent_diff_stats","copilot_custom_copilots_feature_preview","copilot_custom_copilots_images","copilot_duplicate_thread","copilot_features_raycast_logo","copilot_free_to_paid_telem","copilot_ftp_hyperspace_upgrade_prompt","copilot_ftp_settings_upgrade","copilot_ftp_upgrade_to_pro_from_models","copilot_ftp_your_copilot_settings","copilot_generate_commit_message_blob_public_preview","copilot_global_overlay_v2","copilot_immersive_agent_branch_selection","copilot_immersive_structured_model_picker","copilot_issue_list_show_more","copilot_loops_share_button","copilot_no_floating_button","copilot_pipes_github_graphql_nodes","copilot_premium_request_quotas","copilot_read_shared_conversation","copilot_share_active_subthread","copilot_show_copilot_sub_issues_button_on_issues_page","copilot_spaces_input_menu_select","copilot_spark_allow_empty_commit","copilot_spark_progressive_error_handling","copilot_spark_single_user_iteration","copilot_spark_use_billing_headers","copilot_spark_write_iteration_history_to_git","copilot_stable_conversation_view","copilot_workbench_agent_seed_tool","copilot_workbench_cache","copilot_workbench_connection_reload_banner","copilot_workbench_preview_analytics","copilot_workbench_ratelimit_fallback","copilot_workbench_refresh_on_wsod","copilot_workbench_synthetic_generation","custom_copilots_capi_mode","dashboard_public_preview","direct_to_salesforce","dotcom_chat_client_side_skills","failbot_report_error_react_apps_on_page","fgpat_permissions_selector_redesign","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","github_models_scheduled_hydro_events","global_nav_copilot_a11y_fix","global_nav_reductive_user_menu","global_search_multi_orgs","global_sso_banner","hpc_improve_dom_insertion_observer","hyperspace_diff_view","inp_reduced_threshold","insert_before_patch","issue_fields_report_usage","issues_expanded_file_types","issues_react_blur_item_picker_on_close","issues_react_bots_timeline_pagination","issues_react_include_bots_in_pickers","issues_react_prohibit_title_fallback","issues_react_remove_placeholders","issues_react_select_panel_fullscreen_on_narrow","issues_sticky_sidebar","item_picker_issue_type_relay_migration","item_picker_label_relay_migration","item_picker_mutations_relay_migration","item_picker_project_relay_migration","kb_semantic_api_migration","lifecycle_label_name_updates","link_contact_sales_swp_marketo","marketing_pages_search_explore_provider","mcp_registry_install","memex_mwl_filter_field_delimiter","memex_roadmap_drag_style","migrate_toasts_to_banners_web_notifications","new_traffic_page_banner","org_repos_page_route","override_pulse_legacy_url","primer_react_segmented_control_tooltip","primer_react_unified_portal_root","record_sso_banner_metrics","releases_update_ref_selector","remove_child_patch","repos_insights_remove_new_url","repository_suggester_elastic_search","sample_network_conn_type","scheduled_reminders_updated_limits","show_edit_on_default_option","site_homepage_contentful","site_msbuild_webgl_hero","spark_commit_on_default_branch","spark_show_data_access_on_publish","spark_sync_repository_after_iteration","viewscreen_sandbox","webp_support","workbench_default_sonnet4","workbench_store_readonly"],"login":"manojraul","copilotApiOverrideUrl":"https://api.individual.githubcopilot.com"}</script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_github_catalyst_lib_index_-280e4f-09a68e5897fb.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_scroll-anchoring_dist_scroll-anchoring_esm_js-node_modules_github_hydro--581846-4d52a4aed490.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/app_assets_modules_github_diffs_blob-lines_ts-app_assets_modules_github_diffs_linkable-line-n-db17fa-ef77e0d5d94c.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/diffs-37655e9d8e97.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/primer-react-0af0c1e5dc77.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/react-core-5f7173a40f86.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/react-lib-17ccbc80f53b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/octicons-react-0f0d82031c98.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-1fff13-a67dacb6db80.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_tanstack_query-core_build_modern_mutation_js-node_modules_tanstack_query-9bf7e4-a1bacdef8ef2.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_tanstack_query-core_build_modern_queryClient_js-node_modules_tanstack_re-d87a32-ae1d44ebdc99.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_dompurify_dist_purify_es_mjs-0294cfa498e7.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-362960c8d059.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_date-fns_format_mjs-f7e5dd4e3ebd.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f-6af178f555c7.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_lodash-es__isIterateeCa-89abd9-7de41e04a69d.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_hotkey_dist_index_js-node_modules_date-fns_getDaysInMonth_mjs-nod-70c11b-a672e4dfe08c.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_lodash-es__Stack_js-node_modules_lodash-es__Uint8Array_js-node_modules_l-4faaa6-95511fe13c4b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_dnd-kit_modifiers_dist_modifiers_esm_js-node_modules_dnd-kit_sortable_di-72228e-99b95b9fca56.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_tanstack_react-virtual_dist_esm_index_js-4f7c027617ef.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_swc_helpers_esm__define_property_js-node_modules_lodash-es__getAllKeys_j-86c8c2-f6bac8d2298f.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_react-relay_index_js-065619a68bd6.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_devlop_lib_default_js-node_modules_mdast-util-from-markdown_lib_index_js-cf17bf-18805d9f38c0.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_mdast-util-gfm_lib_index_js-node_modules_micromark-extension-gfm_index_js-f82ed5454897.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_remark-parse_lib_index_js-node_modules_unified_lib_index_js-4b6c6d51b7cd.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_codemirror_language_dist_index_js-03ec90930a56.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_react-markdown_lib_index_js-7758bbe44de9.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_codemirror_commands_dist_index_js-3536a249b1a1.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_hastscript_lib_index_js-node_modules_lowlight_lib_all_js-node_modules_re-376063-b532d0267536.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_fzy_js_index_js-node_modules_github_g-emoji-element_dist_index_js-node_m-bdd141-966153957718.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_catalyst_lib_index_js-node_modules_primer_styled-react_dist_index-d380a0-822e5a63e1d8.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_paths_index_ts-541dcbefcfc4.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_ui-commands_ui-commands_ts-70979c7dae2e.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_date-picker_components_DatePicker_tsx-5b5fe0292542.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_drag-and-drop_drag-and-drop_ts-packages_hydro-analytics_hydro-analytics_ts-2241b21955a1.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_list-view_src_hooks_use-next-header-tag_ts-packages_list-view_src_ListItem_ListItem_-055669-8f9082cec25b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_ref-selector_RefSelector_tsx-337a71d79ff6.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_utils_copilot-local-storage_ts-bc018b6ba447.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_item-picker_components_RepositoryPicker_tsx-packages_safe-html_VerifiedHTML_tsx-2b326ab809b3.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-markdown_MarkdownRenderer_tsx-29c930bb9b89.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_history_history_ts-packages_relay-environment_relay-environment_ts-packages_soft-nav-84fffc-7e9464b2dc52.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_use-client-value_use-client-value_ts-packages_issue-create_dialog_CreateIssueDialogE-144424-f49744abf865.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_commenting_constants_values_ts-packages_react-profiling-mode_src_index_ts-packages_a-2e187b-456529d532c0.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_components_CopilotIconAnimation_tsx-4f0dd006fa0a.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_app-uuid_app-uuid_ts-packages_signed-commit-badge_index_ts-a0405d44c9b1.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_diff-file-header_diff-file-header_ts-packages_document-metadata_document-metadata_ts-632264-e01cb1facd33.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-auth-token_copilot-auth-token_ts-packages_diff-file-tree_diff-file-tree-help-7c41c5-7805547cb32f.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_commit-attribution_index_ts-packages_commit-checks-status_index_ts-packages_current--18e2dc-c2c2e01c89bf.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/node_modules_github_mini-throttle_dist_decorators_js-packages_use-hide-footer_use-hide-footer-073c78-ed1978003d8b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_code-view-shared_utilities_web-worker_ts-packages_code-view-shared_worker-jobs_debou-52b466-07ae4d25069b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./script_files/commits-b3dfa33e43fd.js.download" defer="defer"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>commit msg · ashu-7683/Movie_recommendation_system@2f2415b</title><meta name="route-pattern" content="/:user_id/:repository/commit/:name(/*path)" data-turbo-transient=""><meta name="route-controller" content="commit" data-turbo-transient=""><meta name="route-action" content="show" data-turbo-transient=""><meta name="fetch-nonce" content="v2:e05af30d-231a-e8c2-c432-ed93dbac2351"><meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb"><meta name="request-id" content="CFE8:1D22FC:695994:859DE2:68CCFA42" data-turbo-transient="true"><meta name="html-safe-nonce" content="d177c8e0f906b2743d21be8deccb4058910a83c84a64683933712e710069ad5f" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9hc2h1LTc2ODMvTW92aWVfcmVjb21tZW5kYXRpb25fc3lzdGVtL2NvbW1pdC8yZjI0MTViYThkZDU3YjI5NDllNDRiYjU1MmY5MmQ5ZmU5NDdmZDU3IiwicmVxdWVzdF9pZCI6IkNGRTg6MUQyMkZDOjY5NTk5NDo4NTlERTI6NjhDQ0ZBNDIiLCJ2aXNpdG9yX2lkIjoiNDk3NzAxNjcxNTc2MTUyMzc0MyIsInJlZ2lvbl9lZGdlIjoiY2VudHJhbGluZGlhIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-turbo-transient="true"><meta name="visitor-hmac" content="bc835db8f63a316b81ea4b83910d217cd6eb929f6c0b501345f6b7032a9062ee" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:1031991367" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,commits,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_commits" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="200089978"><meta name="octolytics-actor-login" content="manojraul"><meta name="octolytics-actor-hash" content="17f805656144f913c0b74e5793f9924ddc0884fdaff6a95983f5a844d3ff8d13"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/commit/show" data-turbo-transient="true"><meta name="user-login" content="manojraul"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/ashu-7683/Movie_recommendation_system git https://github.com/ashu-7683/Movie_recommendation_system.git"><meta name="octolytics-dimension-user_id" content="194407718"><meta name="octolytics-dimension-user_login" content="ashu-7683"><meta name="octolytics-dimension-repository_id" content="1031991367"><meta name="octolytics-dimension-repository_nwo" content="ashu-7683/Movie_recommendation_system"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="1031991367"><meta name="octolytics-dimension-repository_network_root_nwo" content="ashu-7683/Movie_recommendation_system"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><meta name="release" content="da8f58dc3f85b591184c2df1ee6b1ed2f63c923e"><meta name="ui-target" content="full"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon-dark.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon-dark.svg" data-base-href="https://github.githubassets.com/favicons/favicon"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><meta name="msapplication-TileImage" content="/windows-tile.png"><meta name="msapplication-TileColor" content="#ffffff"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style></head>

  <body class="logged-in env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 15px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
        <div id="__primerPortalRoot__" role="region" style="z-index: 1000; position: absolute; width: 100%;" data-turbo-permanent=""></div>
      



    <div class="position-relative header-wrapper js-header-wrapper ">
      <a href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#start-of-content" data-skip-target-assigned="false" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/keyboard-shortcuts-dialog.2de9c7d6456a311fce49.module.css">

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:rv:__">{"resolvedServerColorMode":"night"}</script></div>
</react-partial>





      

          

                  <header class="AppHeader" role="banner">
      <h2 class="sr-only">Navigation Menu</h2>


        

        <div class="AppHeader-globalBar pb-2 js-global-bar">
          <div class="AppHeader-globalBar-start responsive-context-region">
            <div class="">
                  <deferred-side-panel data-url="/_side-panels/global" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment" data-nonce="v2:e05af30d-231a-e8c2-c432-ed93dbac2351" data-view-component="true"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  
          <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-37f7473a-1720-4615-9777-6022219bc700" id="dialog-show-dialog-37f7473a-1720-4615-9777-6022219bc700" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button p-0 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>

<dialog-helper>
  <dialog data-target="deferred-side-panel.panel" id="dialog-37f7473a-1720-4615-9777-6022219bc700" aria-modal="true" aria-labelledby="dialog-37f7473a-1720-4615-9777-6022219bc700-title" aria-describedby="dialog-37f7473a-1720-4615-9777-6022219bc700-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel Overlay--disableScroll">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-37f7473a-1720-4615-9777-6022219bc700-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-37f7473a-1720-4615-9777-6022219bc700" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="dialog-37f7473a-1720-4615-9777-6022219bc700-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2">    <div data-view-component="true" class="d-flex flex-column mb-3">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list data-catalyst="">
    <ul data-target="nav-list.topLevelList" data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-78899c5c-f5ff-4ef0-bbdb-9b963edaaea8" href="https://github.com/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-7dacaea1-8661-4735-9849-982382418564" href="https://github.com/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-805a5a9d-dd25-4c54-ad04-d98c802ab64b" href="https://github.com/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROJECTS&quot;,&quot;label&quot;:null}" id="item-d52cee17-be7e-4cd1-bfb5-2677e837ff79" href="https://github.com/projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-82b0020e-c015-4336-bb7f-2067f8b8200c" href="https://github.com/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-1bb024a4-91bd-4876-8c5b-4d746666c7ff" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span>      
</a>
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider hide-whenRegular"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;COPILOT&quot;,&quot;label&quot;:null}" id="item-c4285895-0628-487d-985c-6d7103f8df70" href="https://github.com/copilot" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Copilot
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem hide-whenRegular">
    
    
    <a id="item-0021f061-a4f0-4b04-9e64-baf7e9f6ec22" href="https://github.com/copilot/spaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-space">
    <path d="M0 13.25V2.75C0 1.784.784 1 1.75 1H5c.551 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v3.638a.75.75 0 0 1-1.5 0V4.75a.25.25 0 0 0-.25-.25H7.5a1.75 1.75 0 0 1-1.4-.7l-.9-1.2a.25.25 0 0 0-.2-.1H1.75a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h5.663l.076.004a.75.75 0 0 1 0 1.492L7.413 15H1.75A1.75 1.75 0 0 1 0 13.25Z"></path><path d="M12.265 9.16a.248.248 0 0 1 .467 0l.237.649a3.726 3.726 0 0 0 2.219 2.218l.649.238a.249.249 0 0 1 0 .467l-.649.237a3.728 3.728 0 0 0-2.219 2.219l-.237.649a.249.249 0 0 1-.467 0l-.238-.649a3.726 3.726 0 0 0-2.218-2.219l-.649-.237a.248.248 0 0 1 0-.467l.649-.238a3.725 3.725 0 0 0 2.218-2.218l.238-.649Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Spaces
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem ActionListItem--hasSubItem hide-whenRegular">
    
    
    <button id="item-f9b30210-72ff-4406-b594-5436d892c948" type="button" aria-expanded="false" data-action="
            click:nav-list#handleItemWithSubItemClick
            keydown:nav-list#handleItemWithSubItemKeydown
          " data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-download">
    <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Download Copilot
</span>      
        <span class="ActionListItem-visual ActionListItem-action--trailing">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-chevron-down ActionListItem-collapseIcon">
    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
</svg>
        </span>
</button>
        <ul role="list" data-action="keydown:nav-list#handleItemWithSubItemKeydown" aria-labelledby="item-f9b30210-72ff-4406-b594-5436d892c948" data-view-component="true" class="ActionList ActionList--subGroup">
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-ff02d14d-a181-49f3-8e0b-2e077cf14b47" href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Visual Studio Code
</span>      
</a>
  
</li>

          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-878da3e6-8bd7-4d2a-a689-0fcf58aec747" href="https://visualstudio.microsoft.com/github-copilot/" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Visual Studio
</span>      
</a>
  
</li>

          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-297106ed-e892-4401-b2b8-17e07b80322c" href="https://github.com/github/CopilotForXcode" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Xcode
</span>      
</a>
  
</li>

          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-161e0653-f721-408a-a1c5-0ebfd3f09413" href="https://plugins.jetbrains.com/plugin/17718-github-copilot" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          JetBrains
</span>      
</a>
  
</li>

          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-375b5554-22fb-4aef-8eed-ac991c6d71c2" href="https://github.com/github/copilot.vim" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Neovim
</span>      
</a>
  
</li>

          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem--subItem ActionListItem">
    
    
    <a id="item-9503c6fc-93c5-463b-83ee-39f03500a583" href="https://docs.github.com/en/copilot/how-tos/set-up/installing-github-copilot-in-the-cli" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          CLI
</span>      
</a>
  
</li>

</ul>
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-daf307e5-5bc1-4bd8-bca6-942f723384bb" href="https://github.com/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-40609c3e-2061-4bcb-8437-27a0f9e77fc1" href="https://github.com/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MCP_REGISTRY&quot;,&quot;label&quot;:null}" id="item-3820346f-6697-4ab1-afaf-61f9bee156f3" href="https://github.com/mcp" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-mcp">
    <path d="M5.52 1.12a3.578 3.578 0 0 1 6.078 2.98 3.578 3.578 0 0 1 2.982 6.08l-3.292 3.293a.252.252 0 0 0 0 .354l.843.843a.749.749 0 1 1-1.06 1.06l-.844-.843a1.75 1.75 0 0 1 0-2.474L13.52 9.12a2.08 2.08 0 0 0 0-2.94 2.08 2.08 0 0 0-2.94 0L7.731 9.03A.75.75 0 0 1 6.67 7.97l2.85-2.85a2.08 2.08 0 0 0 0-2.94 2.08 2.08 0 0 0-2.94 0l-4.799 4.8A.75.75 0 0 1 .72 5.92Z"></path><path d="M7.52 3.12a.749.749 0 1 1 1.06 1.06L5.731 7.03A2.079 2.079 0 0 0 8.67 9.97l2.85-2.85a.749.749 0 1 1 1.06 1.06l-2.849 2.85A3.578 3.578 0 0 1 4.67 5.97Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          MCP Registry
</span>      
</a>
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
          <span data-view-component="true">
  <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="anim-rotate">
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
    <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>    <span class="sr-only">Loading</span>
</span>
</div>
</div>
      <div data-view-component="true" class="flex-1"></div>


      <div data-view-component="true" class="px-2">          <p class="color-fg-subtle text-small text-light">© 2025 GitHub, Inc.</p>

          <div data-view-component="true" class="d-flex flex-wrap text-small text-light">
              <a target="_blank" href="https://github.com/about" data-view-component="true" class="Link mr-2">About</a>
              <a target="_blank" href="https://github.blog/" data-view-component="true" class="Link mr-2">Blog</a>
              <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
              <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
              <a target="_blank" href="https://github.com/security" data-view-component="true" class="Link mr-2">Security</a>
              <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>

</div></div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>


  <div data-show-on-forbidden-error="" hidden="">
    <div class="Box">
  <div class="blankslate-container">
    <div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p><p class="color-fg-muted my-2 mb-2 ws-normal">There was an error while loading. <a class="Link--inTextBlock" data-turbo="false" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>
</include-fragment></deferred-side-panel>
            </div>

            <a class="AppHeader-logo ml-1 " href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
              <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
            </a>

              <context-region-controller class="AppHeader-context responsive-context-region" data-max-items="5" data-catalyst="">
  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="GitHub Breadcrumb">
      
<context-region data-target="context-region-controller.contextRegion" role="list" data-action="context-region-changed:context-region-controller#crumbsChanged" data-catalyst="">
    <context-region-crumb data-crumb-id="contextregion-usercrumb-ashu-7683" data-targets="context-region.crumbs" data-label="ashu-7683" data-href="/ashu-7683" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;ashu-7683&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/ashu-7683/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/ashu-7683" id="contextregion-usercrumb-ashu-7683-link" data-view-component="true" class="AppHeader-context-item" aria-keyshortcuts="Alt+ArrowUp">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">ashu-7683</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-usercrumb-ashu-7683-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          ashu-7683
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

      <li data-target="context-region-controller.overflowMenuContainer context-region.overflowMenuContainer" role="listitem" hidden="">
        <action-menu data-target="context-region-controller.overflowActionMenu" data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-button" popovertarget="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-overlay" aria-controls="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-list" aria-haspopup="true" aria-labelledby="tooltip-c6206c10-3452-446c-8645-b1f2f65266b7" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-c6206c10-3452-446c-8645-b1f2f65266b7" for="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Show more breadcrumb items</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-overlay" anchor="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 4px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-button" id="action-menu-641e8bca-19c9-4290-9d19-12d5f6993042-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="true" data-crumb-id="contextregion-usercrumb-ashu-7683" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-06a6b5d9-8954-4283-85b2-7a3731af36b7" href="https://github.com/ashu-7683" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          ashu-7683
</span>      
</a>
  
</li>
        <li hidden="true" data-crumb-id="contextregion-repositorycrumb-movie_recommendation_system" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-d3479332-70c4-4a85-aad0-9480d59eaf9f" href="https://github.com/ashu-7683/Movie_recommendation_system" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Movie_recommendation_system
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu>
  <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>


      </li>
    <context-region-crumb data-crumb-id="contextregion-repositorycrumb-movie_recommendation_system" data-targets="context-region.crumbs" data-label="Movie_recommendation_system" data-href="/ashu-7683/Movie_recommendation_system" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Movie_recommendation_system&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/ashu-7683/Movie_recommendation_system" id="contextregion-repositorycrumb-movie_recommendation_system-link" data-view-component="true" class="AppHeader-context-item">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">Movie_recommendation_system</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-repositorycrumb-movie_recommendation_system-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          Movie_recommendation_system
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

</context-region>

    </nav>
  </div>
</context-region-controller>

          </div>
          <div class="AppHeader-globalBar-end">
              <div class="AppHeader-search">
                  


<qbsearch-input class="search-input" data-scope="repo:ashu-7683/Movie_recommendation_system" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="ImF_0Zq262zm_vQVuIac_6KPWcPFZ5tDCALSRCKyQpHg0jVjC1QRSEOJs6ZHndbKR4z23ox-nNmJOWCqJJH3lQ" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="ashu-7683/Movie_recommendation_system" data-current-org="" data-current-owner="ashu-7683" data-logged-in="true" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control AppHeader-search-control-overflow">
      <label for="AppHeader-searchInput" aria-label="Search or jump to…" class="AppHeader-search-visual--leading">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}" aria-describedby="search-error-message-flash">
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-53cc3cac-ebaa-4efa-9861-318966f634df" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results" tabindex="-1"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-53cc3cac-ebaa-4efa-9861-318966f634df" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">Search syntax tips</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">  <span class="Button-content">
    <span class="Button-label">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="LceTRuVjGQH-StWtGTJxEm7e9RQ_JM7CyvUST6K5oLSOyDAljkBH-2wJD8kIfYs3UnizpHWAbjiLDaXwgKX_LA">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="20iLarwyOlUEQ4zAInpF9_QePciR3c_WMrR5FaA-khOLSJumj6ZtmA9dlwborf-c7RGurSyYStb1QXxug4yUQA">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" value="eiqdTASWnkuYP1Ky1udhKLYnjx3y7wlRkLB3YqzKB_fzjKgj56wK8HsjOQcrsgLNm_3jCRQKlChDYOaVFmNVvw" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input>  <input type="hidden" value="4NUy-fBvZvyKs050MAsaZ23ah2m6BBYIhOeymfH0-KMRMajukTK_utA1oNVxhUjCgG-Xa2l7-npv753L9PWg2Q" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">


              </div>

            
              <div class="AppHeader-CopilotChat hide-sm hide-md">
  <div class="d-flex">
    <react-partial-anchor data-catalyst="">
        <a href="https://github.com/copilot" data-target="react-partial-anchor.anchor" id="copilot-chat-header-button" aria-labelledby="tooltip-d892184d-bc19-43b6-ab88-70be6e7b887c" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonLeft">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot Button-visual">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-d892184d-bc19-43b6-ab88-70be6e7b887c" for="copilot-chat-header-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Chat with Copilot</tool-tip>

      
    
        <script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_tanstack_react-query_build_modern_useQuery_js-node_modules_diff_lib_index_mjs-1bcf85319d2e.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-a2583d-6453056586e1.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_fzy_js_index_js-node_modules_dom-input-range_dist_index_js-ad420d163f4e.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_github_hydro-analytics--e21ffd-b759747869e8.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/vendors-node_modules_emoji-regex_index_js-node_modules_github_hotkey_dist_index_js-node_modul-8508c5-4816dadd22ae.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_components_tracing_TraceProvider_tsx-f6020069b7f0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_utils_CopilotChatContext_tsx-79705d054ae3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_components_ModelPicker_tsx-e939e71af0a4.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/packages_copilot-chat_hooks_use-chat-message-behavior_ts-packages_copilot-chat_hooks_use-chat-018d04-c8c05bd03ec0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./script_files/copilot-chat-319061c5eab0.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/packages_copilot-chat_hooks_use-chat-message-behavior_ts-packages_copilot-chat_hooks_use-chat-018d04.8086bd16a97ba0b47bbc.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/copilot-chat.8e2380d40284e1ff7b9d.module.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/copilot-markdown-rendering-ddd978d4a7c0.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/packages_copilot-chat_hooks_use-chat-message-behavior_ts-packages_copilot-chat_hooks_use-chat-018d04.8086bd16a97ba0b47bbc.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/copilot-chat.8e2380d40284e1ff7b9d.module.css">

<react-partial partial-name="copilot-chat" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"currentTopic":{"id":1031991367,"name":"Movie_recommendation_system","ownerLogin":"ashu-7683","ownerType":"User","readmePath":null,"description":null,"commitOID":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","ref":"refs/heads/master","refInfo":{"name":"master","type":"branch"},"visibility":"public","languages":[],"customInstructions":[],"defaultBranch":"master","ownerAvatarUrl":"https://avatars.githubusercontent.com/u/194407718?v=4"},"findFileWorkerPath":"/assets-cdn/worker/find-file-worker-9bd411a8e273.js","renderPopover":false,"renderBetaLabel":false,"chatIsVisible":true,"chatVisibleSettingPath":"/users/manojraul/copilot_chat/settings/copilot_chat_visibility","ssoOrganizations":[],"apiVersion":"2025-05-01","agentsPath":"/github-copilot/chat/agents","apiURL":"https://api.individual.githubcopilot.com","currentUserLogin":"manojraul","customInstructions":null,"renderKnowledgeBases":false,"customCopilotsEnabled":false,"optedInToPreviewFeatures":false,"optedInToUserFeedback":false,"renderAttachKnowledgeBaseHerePopover":true,"renderKnowledgeBaseAttachedToChatPopover":true,"personalInstructions":null,"reviewLab":false,"realIp":null,"scrollToTop":false,"hasCEorCBAccess":false,"licenseType":"unlicensed","plan":null,"quotas":{"limits":{"premiumInteractions":0},"remaining":{"premiumInteractions":0,"chatPercentage":0.0,"premiumInteractionsPercentage":0.0},"resetDate":"2025-10-01","overagesEnabled":false},"icebreakers":[{"type":"functional","data":[{"id":"create-bug-issue","message":"Hi Copilot! Could you please start a draft issue for a bug? Once you've created the draft issue, if you need more information, ask me 1-2 key questions. If you also think I should upload any information or images that would help write the bug issue, let me know.","titleHtml":"Create an issue for a bug","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"summarize-pulls","message":"Hi Copilot! Could you help summarize a pull request? I'd like to know its purpose and the key changes made. Please include details about the problem it solves, new features or functionality introduced, any breaking changes, testing done, and documentation updates. Thank you!","titleHtml":"Summarize a pull request","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"code-feedback","message":"Hi Copilot! Please review my code for best practices, readability, performance, and potential bugs. First, prompt me to provide the link to the relevant GitHub repository or file. Then, offer concrete suggestions for improvement, explain any issues you discover, and provide example corrections where appropriate.","titleHtml":"Get code feedback","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"next-steps-issue","message":"Hi Copilot! Could you suggest the next actionable steps for an issue, based on either the provided issue link or a copy pasted description?","titleHtml":"Suggest next steps for an issue","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"understand-arch-diagram","message":"Hi Copilot! Could you please help me interpret this architecture diagram?","titleHtml":"Interpret an architecture diagram","icon":"eye","color":"var(--display-purple-fgColor)"},{"id":"create-profile-readme","message":"Hi Copilot! Please create a standout profile README for $$USERNAME$$. Ask me for any key details (such as my profession, top skills, favorite projects, or social links) that would help you personalize it.","titleHtml":"Create a profile README for me","icon":"rocket","color":"var(--display-pink-fgColor)"},{"id":"my-open-pulls","message":"Hi Copilot! Can you please find my open pull requests?","titleHtml":"My open pull requests","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"make-pong","message":"Hi Copilot! Could you generate a simple Pong game utilizing HTML, CSS, and JavaScript? The player should control the left paddle with their mouse, and the right paddle should be controlled automatically by a basic AI. Make sure the game includes a bouncing ball and collision detection for paddles and walls. Please provide the code for all three components: the HTML file, the CSS file, and the JavaScript file directly within the chat window. Thanks!","titleHtml":"Make a Pong game","icon":"code","color":"var(--display-gray-fgColor)"}]},{"type":"instructional","data":[]},{"type":"interactional","data":[{"id":"to-do-app-local-storage","message":"Create a to-do list application with local storage functionality.","titleHtml":"To-do list with local storage","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"digital-clock-time-zones","message":"Create a digital clock that displays the current time in different time zones.","titleHtml":"A digital time zone clock","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"weather-dashboard-app","message":"Develop a weather dashboard that fetches data from a public weather API.","titleHtml":"Develop a weather dashboard","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"create-joke-generator","message":"Create a random joke generator using an external API.","titleHtml":"Create a joke generator","icon":"code","color":"var(--display-gray-fgColor)"}]}],"canShareThread":true,"thirdPartyMcpAllowed":false}}</script>
  <div data-target="react-partial.reactRoot"><div class="CopilotChat-module__CopilotChatContainer--fWXmM"></div><div class="PortalContainerUtils-module__chatPortalContainer--Otmle"></div><script type="application/json" id="__PRIMER_DATA_:rgf:__">{"resolvedServerColorMode":"night"}</script></div>
</react-partial>



      </react-partial-anchor>
    <div class="position-relative">
      
        <react-partial-anchor data-catalyst="">
          <button id="global-copilot-menu-button" data-target="react-partial-anchor.anchor" aria-expanded="false" aria-labelledby="tooltip-6a7211d8-edb9-441e-8102-f8dcfcee7ed2" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonRight" aria-haspopup="true">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down Button-visual">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button><tool-tip id="tooltip-6a7211d8-edb9-441e-8102-f8dcfcee7ed2" for="global-copilot-menu-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Open Copilot…</tool-tip>

          
        
            <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/global-copilot-menu.e8b96f8e81aaf397c759.module.css">

<react-partial partial-name="global-copilot-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"repository":{"id":1031991367,"name":"Movie_recommendation_system","ownerLogin":"ashu-7683"}}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:r11:__">{"resolvedServerColorMode":"night"}</script></div>
</react-partial>


          </react-partial-anchor>
    </div>
  </div>
</div>


            <div class="AppHeader-actions position-relative">
                 <react-partial-anchor data-catalyst="">
      <button id="global-create-menu-anchor" aria-label="Create something new" data-target="react-partial-anchor.anchor" type="button" data-view-component="true" class="AppHeader-button AppHeader-button--dropdown global-create-button Button--secondary Button--medium Button width-auto color-fg-muted" aria-describedby="tooltip-9038227e-829b-49f9-a40d-49365bf517e2" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-9038227e-829b-49f9-a40d-49365bf517e2" for="global-create-menu-anchor" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new…</tool-tip>

      
    
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/global-create-menu.091342d12267a9316908.module.css">

<react-partial partial-name="global-create-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"createRepo":true,"importRepo":true,"codespaces":true,"spark":false,"codingAgent":false,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/manojraul?tab=projects","createLegacyProject":false,"createIssue":true,"org":null,"owner":"ashu-7683","repo":"Movie_recommendation_system"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r15:__">{"resolvedServerColorMode":"night"}</script></div>
</react-partial>


      </react-partial-anchor>

        
                <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-b7bb2eea-2355-4ff7-819b-085600d74890" aria-labelledby="tooltip-7d35c6c8-bac5-40de-a8be-44ec949602fc" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-7d35c6c8-bac5-40de-a8be-44ec949602fc" for="icon-button-b7bb2eea-2355-4ff7-819b-085600d74890" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your issues</tool-tip>

                <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-43bffe39-7e53-4de5-ac07-8934a324562e" aria-labelledby="tooltip-afcad69e-e773-4de0-adc7-c579625816c7" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-afcad69e-e773-4de0-adc7-c579625816c7" for="icon-button-43bffe39-7e53-4de5-ac07-8934a324562e" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your pull requests</tool-tip>

            </div>
            
              <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MjAwMDg5OTc4IiwidCI6MTc1ODI2Mzg3N30=--3c6de279ba9b1455508a5f4f56d8fdb01b39b740e4f45c2f12ff36ee69572c17" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip id="notification-indicator-tooltip" data-target="notification-indicator.tooltip" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have no unread notifications</tool-tip>
</notification-indicator>

            <div class="AppHeader-user">
              <deferred-side-panel data-url="/_side-panels/user?repository_id=1031991367" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment" data-nonce="v2:e05af30d-231a-e8c2-c432-ed93dbac2351" data-view-component="true"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  
    <react-partial-anchor data-catalyst="">
  <button data-target="react-partial-anchor.anchor" data-login="manojraul" aria-label="Open user navigation menu" type="button" data-view-component="true" class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><img src="./script_files/200089978" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>
  

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/primer-react.1376d83c759fa3dd6e71.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./script_files/global-user-nav-drawer.04e117190f24a25f4c1c.module.css">

<react-partial partial-name="global-user-nav-drawer" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"owner":{"login":"manojraul","name":"Manoj Kumar Raul","avatarUrl":"https://avatars.githubusercontent.com/u/200089978?v=4"},"drawerId":"global-user-nav-drawer","lazyLoadItemDataFetchUrl":"/_side-panels/user.json","canAddAccount":true,"addAccountPath":"/login?add_account=1\u0026return_to=https%3A%2F%2Fgithub.com%2Fashu-7683%2FMovie_recommendation_system%2Fcommit%2F2f2415ba8dd57b2949e44bb552f92d9fe947fd57","switchAccountPath":"/switch_account","loginAccountPath":"/login?add_account=1","projectsPath":"/manojraul?tab=projects","gistsUrl":"https://gist.github.com/mine","docsUrl":"https://docs.github.com","yourEnterpriseUrl":null,"enterpriseSettingsUrl":null,"supportUrl":"https://support.github.com","showAccountSwitcher":true,"showCopilot":true,"showEnterprises":true,"showEnterprise":false,"showGists":true,"showOrganizations":true,"showSponsors":true,"showUpgrade":true,"showFeaturesPreviews":true,"showEnterpriseSettings":false,"createMenuProps":{"createRepo":true,"importRepo":true,"codespaces":true,"spark":false,"codingAgent":false,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/manojraul?tab=projects","createLegacyProject":false,"createIssue":true,"org":null,"owner":"ashu-7683","repo":"Movie_recommendation_system"}}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r18:__">{"resolvedServerColorMode":"night"}</script></div>
</react-partial>


  </react-partial-anchor>


  <div data-show-on-forbidden-error="" hidden="">
    <div class="Box">
  <div class="blankslate-container">
    <div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p><p class="color-fg-muted my-2 mb-2 ws-normal">There was an error while loading. <a class="Link--inTextBlock" data-turbo="false" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>
</include-fragment></deferred-side-panel>
            </div>

            <div class="position-absolute mt-2">
                
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

            </div>
          </div>
        </div>


        
            <div class="AppHeader-localBar">
              <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/ashu-7683/Movie_recommendation_system" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /ashu-7683/Movie_recommendation_system" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /ashu-7683/Movie_recommendation_system/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /ashu-7683/Movie_recommendation_system/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /ashu-7683/Movie_recommendation_system/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /ashu-7683/Movie_recommendation_system/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          </a><div data-show-on-forbidden-error="" hidden=""><a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div class="Box"><a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
  </a><div class="blankslate-container"><a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2"><a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p></a><p class="color-fg-muted my-2 mb-2 ws-normal"><a id="security-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /ashu-7683/Movie_recommendation_system/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">There was an error while loading. </a><a class="Link--inTextBlock" data-turbo="false" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>


    
</li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/ashu-7683/Movie_recommendation_system/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /ashu-7683/Movie_recommendation_system/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-button" popovertarget="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-overlay" aria-controls="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-list" aria-haspopup="true" aria-labelledby="tooltip-965225a8-e420-4b8c-92b1-990b027a0140" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-965225a8-e420-4b8c-92b1-990b027a0140" for="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-overlay" anchor="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-button" id="action-menu-f0207be7-0d34-4b9b-8e75-d75e7d6db592-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-a407b9b7-63d8-4814-ac95-f83994aeb4fe" href="https://github.com/ashu-7683/Movie_recommendation_system" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-bc6e9a2d-5c02-464b-9ef2-7b9f24ff1081" href="https://github.com/ashu-7683/Movie_recommendation_system/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-d55a5745-076c-4eed-83c4-6b7c8772c97b" href="https://github.com/ashu-7683/Movie_recommendation_system/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-03839da5-b8f4-4317-9f2d-4fb1466f3cf7" href="https://github.com/ashu-7683/Movie_recommendation_system/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-2fcbc5f0-8b46-449d-a5a7-cdebd446dd89" href="https://github.com/ashu-7683/Movie_recommendation_system/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-f6100083-6559-4ac4-8293-525051463e87" href="https://github.com/ashu-7683/Movie_recommendation_system/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-6f7d9a70-2f50-4c8f-a37a-5b27d1c0aade" href="https://github.com/ashu-7683/Movie_recommendation_system/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
              
            </div>
    </header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57">Reload</a> to refresh your session.</span>

    <button id="icon-button-62abe032-7216-4530-a0a7-7082c59fd27c" aria-labelledby="tooltip-25be7655-d985-4f03-bc59-aaaeb7a299f1" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-25be7655-d985-4f03-bc59-aaaeb7a299f1" for="icon-button-62abe032-7216-4530-a0a7-7082c59fd27c" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
        
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">




  <template class="js-flash-template"></template>
</div>


    
  <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MjAwMDg5OTc4IiwidCI6MTc1ODI2Mzg3N30=--3c6de279ba9b1455508a5f4f56d8fdb01b39b740e4f45c2f12ff36ee69572c17" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst="" data-throttle-delay="5000"></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="" data-project-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
    



    
      
    








<react-app app-name="commits" initial-path="/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" style="display: block; min-height: calc(100vh - 64px);" data-attempted-ssr="true" data-ssr="true" data-lazy="false" data-alternate="false" data-data-router-enabled="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"commit":{"oid":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","url":"/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57","authoredDate":"2025-08-04T21:53:35.000+05:30","committedDate":"2025-08-04T21:53:35.000+05:30","shortMessage":null,"shortMessageMarkdown":"\u003cdiv\u003ecommit msg\u003c/div\u003e","shortMessageMarkdownLink":null,"bodyMessageHtml":"","authors":[{"login":"ashu-7683","displayName":"unknown","avatarUrl":"https://avatars.githubusercontent.com/u/194407718?v=4","path":"/ashu-7683","isGitHub":false}],"committerAttribution":false,"committer":{"login":"ashu-7683","displayName":"unknown","avatarUrl":"https://avatars.githubusercontent.com/u/194407718?v=4","path":"/ashu-7683","isGitHub":false},"pusher":null,"pushedDate":null,"parents":[],"globalRelayId":"C_kwDOPYLwR9oAKDJmMjQxNWJhOGRkNTdiMjk0OWU0NGJiNTUyZjkyZDlmZTk0N2ZkNTc","sha1":null,"sha2":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57"},"currentUser":{"id":200089978,"login":"manojraul","userEmail":"manojroul38@gmail.com","avatarURL":"https://avatars.githubusercontent.com/u/200089978?v=4","tabSize":4},"repo":{"id":1031991367,"defaultBranch":"master","name":"Movie_recommendation_system","ownerLogin":"ashu-7683","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2025-08-04T21:57:43.000+05:30","ownerAvatar":"https://avatars.githubusercontent.com/u/194407718?v=4","public":true,"private":false,"isOrgOwned":false},"diffEntryData":[{"diffLines":[{"stylingDirective":null,"type":"HUNK","blobLineNumber":0,"text":"@@ -0,0 +1,36 @@","html":"@@ -0,0 +1,36 @@","displayNoNewLineWarning":false,"position":0,"left":null,"right":0},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":1,"text":"+from flask import Flask, render_template, request, jsonify","html":"+\u003cspan class=pl-k\u003efrom\u003c/span\u003e \u003cspan class=pl-s1\u003eflask\u003c/span\u003e \u003cspan class=pl-k\u003eimport\u003c/span\u003e \u003cspan class=pl-v\u003eFlask\u003c/span\u003e, \u003cspan class=pl-s1\u003erender_template\u003c/span\u003e, \u003cspan class=pl-s1\u003erequest\u003c/span\u003e, \u003cspan class=pl-s1\u003ejsonify\u003c/span\u003e","displayNoNewLineWarning":false,"position":1,"left":null,"right":1},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":2,"text":"+import pandas as pd","html":"+\u003cspan class=pl-k\u003eimport\u003c/span\u003e \u003cspan class=pl-s1\u003epandas\u003c/span\u003e \u003cspan class=pl-k\u003eas\u003c/span\u003e \u003cspan class=pl-s1\u003epd\u003c/span\u003e","displayNoNewLineWarning":false,"position":2,"left":null,"right":2},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":3,"text":"+import os","html":"+\u003cspan class=pl-k\u003eimport\u003c/span\u003e \u003cspan class=pl-s1\u003eos\u003c/span\u003e","displayNoNewLineWarning":false,"position":3,"left":null,"right":3},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":4,"text":"+","html":"+","displayNoNewLineWarning":false,"position":4,"left":null,"right":4},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":5,"text":"+app = Flask(__name__)","html":"+\u003cspan class=pl-s1\u003eapp\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-en\u003eFlask\u003c/span\u003e(\u003cspan class=pl-s1\u003e__name__\u003c/span\u003e)","displayNoNewLineWarning":false,"position":5,"left":null,"right":5},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":6,"text":"+","html":"+","displayNoNewLineWarning":false,"position":6,"left":null,"right":6},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":7,"text":"+# Load movie dataset","html":"+\u003cspan class=pl-c\u003e# Load movie dataset\u003c/span\u003e","displayNoNewLineWarning":false,"position":7,"left":null,"right":7},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":8,"text":"+movies_path = os.path.join(os.path.dirname(__file__), \"movies.csv\")","html":"+\u003cspan class=pl-s1\u003emovies_path\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003eos\u003c/span\u003e.\u003cspan class=pl-c1\u003epath\u003c/span\u003e.\u003cspan class=pl-c1\u003ejoin\u003c/span\u003e(\u003cspan class=pl-s1\u003eos\u003c/span\u003e.\u003cspan class=pl-c1\u003epath\u003c/span\u003e.\u003cspan class=pl-c1\u003edirname\u003c/span\u003e(\u003cspan class=pl-s1\u003e__file__\u003c/span\u003e), \u003cspan class=pl-s\u003e\u0026quot;movies.csv\u0026quot;\u003c/span\u003e)","displayNoNewLineWarning":false,"position":8,"left":null,"right":8},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":9,"text":"+if not os.path.exists(movies_path):","html":"+\u003cspan class=pl-k\u003eif\u003c/span\u003e \u003cspan class=pl-c1\u003enot\u003c/span\u003e \u003cspan class=pl-s1\u003eos\u003c/span\u003e.\u003cspan class=pl-c1\u003epath\u003c/span\u003e.\u003cspan class=pl-c1\u003eexists\u003c/span\u003e(\u003cspan class=pl-s1\u003emovies_path\u003c/span\u003e):","displayNoNewLineWarning":false,"position":9,"left":null,"right":9},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":10,"text":"+    print(\"❌ Error: movies.csv not found!\")","html":"+    \u003cspan class=pl-en\u003eprint\u003c/span\u003e(\u003cspan class=pl-s\u003e\u0026quot;❌ Error: movies.csv not found!\u0026quot;\u003c/span\u003e)","displayNoNewLineWarning":false,"position":10,"left":null,"right":10},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":11,"text":"+    exit(1)","html":"+    \u003cspan class=pl-en\u003eexit\u003c/span\u003e(\u003cspan class=pl-c1\u003e1\u003c/span\u003e)","displayNoNewLineWarning":false,"position":11,"left":null,"right":11},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":12,"text":"+","html":"+","displayNoNewLineWarning":false,"position":12,"left":null,"right":12},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":13,"text":"+movies = pd.read_csv(movies_path, encoding=\"utf-8\")","html":"+\u003cspan class=pl-s1\u003emovies\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003epd\u003c/span\u003e.\u003cspan class=pl-c1\u003eread_csv\u003c/span\u003e(\u003cspan class=pl-s1\u003emovies_path\u003c/span\u003e, \u003cspan class=pl-s1\u003eencoding\u003c/span\u003e\u003cspan class=pl-c1\u003e=\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;utf-8\u0026quot;\u003c/span\u003e)","displayNoNewLineWarning":false,"position":13,"left":null,"right":13},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":14,"text":"+movies[\"title\"] = movies[\"title\"].str.lower()  # Convert to lowercase for case-insensitive search","html":"+\u003cspan class=pl-s1\u003emovies\u003c/span\u003e[\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e] \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003emovies\u003c/span\u003e[\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e].\u003cspan class=pl-c1\u003estr\u003c/span\u003e.\u003cspan class=pl-c1\u003elower\u003c/span\u003e()  \u003cspan class=pl-c\u003e# Convert to lowercase for case-insensitive search\u003c/span\u003e","displayNoNewLineWarning":false,"position":14,"left":null,"right":14},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":15,"text":"+","html":"+","displayNoNewLineWarning":false,"position":15,"left":null,"right":15},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":16,"text":"+@app.route(\"/\")","html":"+\u003cspan class=pl-en\u003e@\u003cspan class=pl-s1\u003eapp\u003c/span\u003e.\u003cspan class=pl-c1\u003eroute\u003c/span\u003e(\u003cspan class=pl-s\u003e\u0026quot;/\u0026quot;\u003c/span\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":16,"left":null,"right":16},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":17,"text":"+def home():","html":"+\u003cspan class=pl-k\u003edef\u003c/span\u003e \u003cspan class=pl-en\u003ehome\u003c/span\u003e():","displayNoNewLineWarning":false,"position":17,"left":null,"right":17},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":18,"text":"+    return render_template(\"index.html\")","html":"+    \u003cspan class=pl-k\u003ereturn\u003c/span\u003e \u003cspan class=pl-en\u003erender_template\u003c/span\u003e(\u003cspan class=pl-s\u003e\u0026quot;index.html\u0026quot;\u003c/span\u003e)","displayNoNewLineWarning":false,"position":18,"left":null,"right":18},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":19,"text":"+","html":"+","displayNoNewLineWarning":false,"position":19,"left":null,"right":19},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":20,"text":"+@app.route(\"/recommend\", methods=[\"GET\"])","html":"+\u003cspan class=pl-en\u003e@\u003cspan class=pl-s1\u003eapp\u003c/span\u003e.\u003cspan class=pl-c1\u003eroute\u003c/span\u003e(\u003cspan class=pl-s\u003e\u0026quot;/recommend\u0026quot;\u003c/span\u003e, \u003cspan class=pl-s1\u003emethods\u003c/span\u003e\u003cspan class=pl-c1\u003e=\u003c/span\u003e[\u003cspan class=pl-s\u003e\u0026quot;GET\u0026quot;\u003c/span\u003e])\u003c/span\u003e","displayNoNewLineWarning":false,"position":20,"left":null,"right":20},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":21,"text":"+def recommend():","html":"+\u003cspan class=pl-k\u003edef\u003c/span\u003e \u003cspan class=pl-en\u003erecommend\u003c/span\u003e():","displayNoNewLineWarning":false,"position":21,"left":null,"right":21},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":22,"text":"+    movie_title = request.args.get(\"title\", \"\").strip().lower()","html":"+    \u003cspan class=pl-s1\u003emovie_title\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003erequest\u003c/span\u003e.\u003cspan class=pl-c1\u003eargs\u003c/span\u003e.\u003cspan class=pl-c1\u003eget\u003c/span\u003e(\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e, \u003cspan class=pl-s\u003e\u0026quot;\u0026quot;\u003c/span\u003e).\u003cspan class=pl-c1\u003estrip\u003c/span\u003e().\u003cspan class=pl-c1\u003elower\u003c/span\u003e()","displayNoNewLineWarning":false,"position":22,"left":null,"right":22},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":23,"text":"+","html":"+","displayNoNewLineWarning":false,"position":23,"left":null,"right":23},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":24,"text":"+    if not movie_title:","html":"+    \u003cspan class=pl-k\u003eif\u003c/span\u003e \u003cspan class=pl-c1\u003enot\u003c/span\u003e \u003cspan class=pl-s1\u003emovie_title\u003c/span\u003e:","displayNoNewLineWarning":false,"position":24,"left":null,"right":24},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":25,"text":"+        return jsonify({\"error\": \"No movie title provided\"}), 400","html":"+        \u003cspan class=pl-k\u003ereturn\u003c/span\u003e \u003cspan class=pl-en\u003ejsonify\u003c/span\u003e({\u003cspan class=pl-s\u003e\u0026quot;error\u0026quot;\u003c/span\u003e: \u003cspan class=pl-s\u003e\u0026quot;No movie title provided\u0026quot;\u003c/span\u003e}), \u003cspan class=pl-c1\u003e400\u003c/span\u003e","displayNoNewLineWarning":false,"position":25,"left":null,"right":25},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":26,"text":"+    ","html":"+    ","displayNoNewLineWarning":false,"position":26,"left":null,"right":26},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":27,"text":"+    if movie_title not in movies[\"title\"].values:","html":"+    \u003cspan class=pl-k\u003eif\u003c/span\u003e \u003cspan class=pl-s1\u003emovie_title\u003c/span\u003e \u003cspan class=pl-c1\u003e\u003cspan class=pl-c1\u003enot\u003c/span\u003e \u003cspan class=pl-c1\u003ein\u003c/span\u003e\u003c/span\u003e \u003cspan class=pl-s1\u003emovies\u003c/span\u003e[\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e].\u003cspan class=pl-c1\u003evalues\u003c/span\u003e:","displayNoNewLineWarning":false,"position":27,"left":null,"right":27},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":28,"text":"+        return jsonify({\"error\": \"Movie not found\"}), 404","html":"+        \u003cspan class=pl-k\u003ereturn\u003c/span\u003e \u003cspan class=pl-en\u003ejsonify\u003c/span\u003e({\u003cspan class=pl-s\u003e\u0026quot;error\u0026quot;\u003c/span\u003e: \u003cspan class=pl-s\u003e\u0026quot;Movie not found\u0026quot;\u003c/span\u003e}), \u003cspan class=pl-c1\u003e404\u003c/span\u003e","displayNoNewLineWarning":false,"position":28,"left":null,"right":28},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":29,"text":"+","html":"+","displayNoNewLineWarning":false,"position":29,"left":null,"right":29},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":30,"text":"+    # Generate simple recommendations (5 random movies)","html":"+    \u003cspan class=pl-c\u003e# Generate simple recommendations (5 random movies)\u003c/span\u003e","displayNoNewLineWarning":false,"position":30,"left":null,"right":30},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":31,"text":"+    recommended_movies = movies[movies[\"title\"] != movie_title].sample(5)[\"title\"].tolist()","html":"+    \u003cspan class=pl-s1\u003erecommended_movies\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003emovies\u003c/span\u003e[\u003cspan class=pl-s1\u003emovies\u003c/span\u003e[\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e] \u003cspan class=pl-c1\u003e!=\u003c/span\u003e \u003cspan class=pl-s1\u003emovie_title\u003c/span\u003e].\u003cspan class=pl-c1\u003esample\u003c/span\u003e(\u003cspan class=pl-c1\u003e5\u003c/span\u003e)[\u003cspan class=pl-s\u003e\u0026quot;title\u0026quot;\u003c/span\u003e].\u003cspan class=pl-c1\u003etolist\u003c/span\u003e()","displayNoNewLineWarning":false,"position":31,"left":null,"right":31},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":32,"text":"+    ","html":"+    ","displayNoNewLineWarning":false,"position":32,"left":null,"right":32},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":33,"text":"+    return jsonify({\"recommended\": recommended_movies})","html":"+    \u003cspan class=pl-k\u003ereturn\u003c/span\u003e \u003cspan class=pl-en\u003ejsonify\u003c/span\u003e({\u003cspan class=pl-s\u003e\u0026quot;recommended\u0026quot;\u003c/span\u003e: \u003cspan class=pl-s1\u003erecommended_movies\u003c/span\u003e})","displayNoNewLineWarning":false,"position":33,"left":null,"right":33},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":34,"text":"+","html":"+","displayNoNewLineWarning":false,"position":34,"left":null,"right":34},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":35,"text":"+if __name__ == \"__main__\":","html":"+\u003cspan class=pl-k\u003eif\u003c/span\u003e \u003cspan class=pl-s1\u003e__name__\u003c/span\u003e \u003cspan class=pl-c1\u003e==\u003c/span\u003e \u003cspan class=pl-s\u003e\u0026quot;__main__\u0026quot;\u003c/span\u003e:","displayNoNewLineWarning":false,"position":35,"left":null,"right":35},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":36,"text":"+    app.run(debug=True)","html":"+    \u003cspan class=pl-s1\u003eapp\u003c/span\u003e.\u003cspan class=pl-c1\u003erun\u003c/span\u003e(\u003cspan class=pl-s1\u003edebug\u003c/span\u003e\u003cspan class=pl-c1\u003e=\u003c/span\u003e\u003cspan class=pl-c1\u003eTrue\u003c/span\u003e)","displayNoNewLineWarning":false,"position":36,"left":null,"right":36}],"diffNumber":0,"diffSize":"0 Bytes","isBinary":false,"isTooBig":false,"collapsed":false,"isSubmodule":false,"lineCount":36,"linesChanged":36,"newTreeEntry":{"lineCount":36,"path":"app.py","mode":100644,"isGenerated":false},"oldTreeEntry":null,"linesAdded":36,"linesDeleted":0,"path":"app.py","pathDigest":"568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959","status":"ADDED","truncatedReason":null,"oldOid":null,"newOid":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","copilotChatReference":null,"deletedSha":null,"canToggleRichDiff":false,"defaultToRichDiff":false,"proseDifffHtml":null,"renderInfo":null,"dependencyDiffPath":null,"submodule":null},{"diffLines":[{"stylingDirective":null,"type":"HUNK","blobLineNumber":0,"text":"@@ -0,0 +1,18 @@","html":"@@ -0,0 +1,18 @@","displayNoNewLineWarning":false,"position":0,"left":null,"right":0},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":1,"text":"+\u003c!DOCTYPE html\u003e","html":"+\u003cspan class=pl-c1\u003e\u0026lt;!DOCTYPE html\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e\u003c/span\u003e","displayNoNewLineWarning":false,"position":1,"left":null,"right":1},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":2,"text":"+\u003chtml lang=\"en\"\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ehtml\u003c/span\u003e \u003cspan class=pl-c1\u003elang\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003een\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":2,"left":null,"right":2},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":3,"text":"+\u003chead\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ehead\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":3,"left":null,"right":3},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":4,"text":"+    \u003cmeta charset=\"UTF-8\"\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003emeta\u003c/span\u003e \u003cspan class=pl-c1\u003echarset\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003eUTF-8\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":4,"left":null,"right":4},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":5,"text":"+    \u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003emeta\u003c/span\u003e \u003cspan class=pl-c1\u003ename\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003eviewport\u003c/span\u003e\u0026quot; \u003cspan class=pl-c1\u003econtent\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003ewidth=device-width, initial-scale=1.0\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":5,"left":null,"right":5},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":6,"text":"+    \u003ctitle\u003eNetflix-Style Movie Recommendations\u003c/title\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003etitle\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003eNetflix-Style Movie Recommendations\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003etitle\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":6,"left":null,"right":6},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":7,"text":"+    \u003clink rel=\"stylesheet\" href=\"{{ url_for('static', filename='style.css') }}\"\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003elink\u003c/span\u003e \u003cspan class=pl-c1\u003erel\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003estylesheet\u003c/span\u003e\u0026quot; \u003cspan class=pl-c1\u003ehref\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003e{{ url_for(\u0026#39;static\u0026#39;, filename=\u0026#39;style.css\u0026#39;) }}\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":7,"left":null,"right":7},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":8,"text":"+\u003c/head\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ehead\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":8,"left":null,"right":8},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":9,"text":"+\u003cbody\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ebody\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":9,"left":null,"right":9},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":10,"text":"+    \u003cdiv class=\"container\"\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ediv\u003c/span\u003e \u003cspan class=pl-c1\u003eclass\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003econtainer\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":10,"left":null,"right":10},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":11,"text":"+        \u003ch1\u003e🎬 Find Your Next Movie\u003c/h1\u003e","html":"+        \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003eh1\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e🎬 Find Your Next Movie\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003eh1\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":11,"left":null,"right":11},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":12,"text":"+        \u003cinput type=\"text\" id=\"search-input\" placeholder=\"Search for a movie...\"\u003e","html":"+        \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003einput\u003c/span\u003e \u003cspan class=pl-c1\u003etype\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003etext\u003c/span\u003e\u0026quot; \u003cspan class=pl-c1\u003eid\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003esearch-input\u003c/span\u003e\u0026quot; \u003cspan class=pl-c1\u003eplaceholder\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003eSearch for a movie...\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":12,"left":null,"right":12},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":13,"text":"+        \u003cbutton id=\"search-btn\"\u003eSearch\u003c/button\u003e","html":"+        \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ebutton\u003c/span\u003e \u003cspan class=pl-c1\u003eid\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003esearch-btn\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003eSearch\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ebutton\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":13,"left":null,"right":13},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":14,"text":"+        \u003cdiv id=\"results\" class=\"movie-grid\"\u003e\u003c/div\u003e","html":"+        \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003ediv\u003c/span\u003e \u003cspan class=pl-c1\u003eid\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003eresults\u003c/span\u003e\u0026quot; \u003cspan class=pl-c1\u003eclass\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003emovie-grid\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ediv\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":14,"left":null,"right":14},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":15,"text":"+    \u003c/div\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ediv\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":15,"left":null,"right":15},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":16,"text":"+    \u003cscript src=\"{{ url_for('static', filename='script.js') }}\"\u003e\u003c/script\u003e","html":"+    \u003cspan class=pl-kos\u003e\u0026lt;\u003c/span\u003e\u003cspan class=pl-ent\u003escript\u003c/span\u003e \u003cspan class=pl-c1\u003esrc\u003c/span\u003e=\u0026quot;\u003cspan class=pl-s\u003e{{ url_for(\u0026#39;static\u0026#39;, filename=\u0026#39;script.js\u0026#39;) }}\u003c/span\u003e\u0026quot;\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003escript\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":16,"left":null,"right":16},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":17,"text":"+\u003c/body\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ebody\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":17,"left":null,"right":17},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":18,"text":"+\u003c/html\u003e","html":"+\u003cspan class=pl-kos\u003e\u0026lt;/\u003c/span\u003e\u003cspan class=pl-ent\u003ehtml\u003c/span\u003e\u003cspan class=pl-kos\u003e\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":18,"left":null,"right":18}],"diffNumber":1,"diffSize":"0 Bytes","isBinary":false,"isTooBig":false,"collapsed":false,"isSubmodule":false,"lineCount":18,"linesChanged":18,"newTreeEntry":{"lineCount":18,"path":"index.html","mode":100644,"isGenerated":false},"oldTreeEntry":null,"linesAdded":18,"linesDeleted":0,"path":"index.html","pathDigest":"0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051","status":"ADDED","truncatedReason":null,"oldOid":null,"newOid":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","copilotChatReference":null,"deletedSha":null,"canToggleRichDiff":false,"defaultToRichDiff":false,"proseDifffHtml":null,"renderInfo":null,"dependencyDiffPath":null,"submodule":null},{"diffLines":[{"stylingDirective":null,"type":"HUNK","blobLineNumber":0,"text":"@@ -0,0 +1,38 @@","html":"@@ -0,0 +1,38 @@","displayNoNewLineWarning":false,"position":0,"left":null,"right":0},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":1,"text":"+const API_KEY = \"36bce817\";  // Your OMDb API Key  36bce817","html":"+\u003cspan class=pl-k\u003econst\u003c/span\u003e \u003cspan class=pl-c1\u003eAPI_KEY\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s\u003e\u0026quot;36bce817\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e  \u003cspan class=pl-c\u003e// Your OMDb API Key  36bce817\u003c/span\u003e","displayNoNewLineWarning":false,"position":1,"left":null,"right":1},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":2,"text":"+","html":"+","displayNoNewLineWarning":false,"position":2,"left":null,"right":2},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":3,"text":"+document.getElementById(\"search-btn\").addEventListener(\"click\", function() {","html":"+\u003cspan class=pl-smi\u003edocument\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003egetElementById\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;search-btn\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eaddEventListener\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;click\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e,\u003c/span\u003e \u003cspan class=pl-k\u003efunction\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":3,"left":null,"right":3},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":4,"text":"+    let movieTitle = document.getElementById(\"search-input\").value.trim();","html":"+    \u003cspan class=pl-k\u003elet\u003c/span\u003e \u003cspan class=pl-s1\u003emovieTitle\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-smi\u003edocument\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003egetElementById\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;search-input\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003evalue\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003etrim\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":4,"left":null,"right":4},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":5,"text":"+","html":"+","displayNoNewLineWarning":false,"position":5,"left":null,"right":5},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":6,"text":"+    fetch(`/recommend?title=${movieTitle}`)","html":"+    \u003cspan class=pl-en\u003efetch\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e`/recommend?title=\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-s1\u003emovieTitle\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e`\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":6,"left":null,"right":6},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":7,"text":"+        .then(response =\u003e response.json())","html":"+        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ethen\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003eresponse\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-s1\u003eresponse\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ejson\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":7,"left":null,"right":7},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":8,"text":"+        .then(data =\u003e {","html":"+        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ethen\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003edata\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":8,"left":null,"right":8},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":9,"text":"+            let resultsDiv = document.getElementById(\"results\");","html":"+            \u003cspan class=pl-k\u003elet\u003c/span\u003e \u003cspan class=pl-s1\u003eresultsDiv\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-smi\u003edocument\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003egetElementById\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;results\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":9,"left":null,"right":9},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":10,"text":"+            resultsDiv.innerHTML = \"\"; // Clear previous results","html":"+            \u003cspan class=pl-s1\u003eresultsDiv\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003einnerHTML\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s\u003e\u0026quot;\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e \u003cspan class=pl-c\u003e// Clear previous results\u003c/span\u003e","displayNoNewLineWarning":false,"position":10,"left":null,"right":10},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":11,"text":"+","html":"+","displayNoNewLineWarning":false,"position":11,"left":null,"right":11},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":12,"text":"+            if (data.recommended) {","html":"+            \u003cspan class=pl-k\u003eif\u003c/span\u003e \u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003edata\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003erecommended\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":12,"left":null,"right":12},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":13,"text":"+                data.recommended.forEach(movie =\u003e {","html":"+                \u003cspan class=pl-s1\u003edata\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003erecommended\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eforEach\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003emovie\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":13,"left":null,"right":13},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":14,"text":"+                    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movie)}\u0026apikey=${API_KEY}`)","html":"+                    \u003cspan class=pl-en\u003efetch\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e`https://www.omdbapi.com/?t=\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-en\u003eencodeURIComponent\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003emovie\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e\u0026amp;apikey=\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-c1\u003eAPI_KEY\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e`\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":14,"left":null,"right":14},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":15,"text":"+                        .then(response =\u003e response.json())","html":"+                        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ethen\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003eresponse\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-s1\u003eresponse\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ejson\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":15,"left":null,"right":15},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":16,"text":"+                        .then(movieData =\u003e {","html":"+                        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ethen\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003emovieData\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":16,"left":null,"right":16},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":17,"text":"+                            let movieCard = document.createElement(\"div\");","html":"+                            \u003cspan class=pl-k\u003elet\u003c/span\u003e \u003cspan class=pl-s1\u003emovieCard\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-smi\u003edocument\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ecreateElement\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;div\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":17,"left":null,"right":17},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":18,"text":"+                            movieCard.classList.add(\"movie-card\");","html":"+                            \u003cspan class=pl-s1\u003emovieCard\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003eclassList\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eadd\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;movie-card\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":18,"left":null,"right":18},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":19,"text":"+","html":"+","displayNoNewLineWarning":false,"position":19,"left":null,"right":19},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":20,"text":"+                            let poster = movieData.Poster \u0026\u0026 movieData.Poster !== \"N/A\" ","html":"+                            \u003cspan class=pl-k\u003elet\u003c/span\u003e \u003cspan class=pl-s1\u003eposter\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s1\u003emovieData\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003ePoster\u003c/span\u003e \u003cspan class=pl-c1\u003e\u0026amp;\u0026amp;\u003c/span\u003e \u003cspan class=pl-s1\u003emovieData\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003ePoster\u003c/span\u003e \u003cspan class=pl-c1\u003e!==\u003c/span\u003e \u003cspan class=pl-s\u003e\u0026quot;N/A\u0026quot;\u003c/span\u003e ","displayNoNewLineWarning":false,"position":20,"left":null,"right":20},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":21,"text":"+                                ? movieData.Poster ","html":"+                                ? \u003cspan class=pl-s1\u003emovieData\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003ePoster\u003c/span\u003e ","displayNoNewLineWarning":false,"position":21,"left":null,"right":21},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":22,"text":"+                                : \"https://via.placeholder.com/150\";","html":"+                                : \u003cspan class=pl-s\u003e\u0026quot;https://via.placeholder.com/150\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":22,"left":null,"right":22},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":23,"text":"+","html":"+","displayNoNewLineWarning":false,"position":23,"left":null,"right":23},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":24,"text":"+                            movieCard.innerHTML = `","html":"+                            \u003cspan class=pl-s1\u003emovieCard\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003einnerHTML\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s\u003e`\u003c/span\u003e","displayNoNewLineWarning":false,"position":24,"left":null,"right":24},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":25,"text":"+                                \u003cimg src=\"${poster}\" alt=\"${movie}\"\u003e","html":"+\u003cspan class=pl-s\u003e                                \u0026lt;img src=\u0026quot;\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-s1\u003eposter\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e\u0026quot; alt=\u0026quot;\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-s1\u003emovie\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e\u0026quot;\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":25,"left":null,"right":25},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":26,"text":"+                                \u003cdiv class=\"movie-title\"\u003e${movie}\u003c/div\u003e","html":"+\u003cspan class=pl-s\u003e                                \u0026lt;div class=\u0026quot;movie-title\u0026quot;\u0026gt;\u003cspan class=pl-s1\u003e\u003cspan class=pl-kos\u003e${\u003c/span\u003e\u003cspan class=pl-s1\u003emovie\u003c/span\u003e\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003c/span\u003e\u0026lt;/div\u0026gt;\u003c/span\u003e","displayNoNewLineWarning":false,"position":26,"left":null,"right":26},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":27,"text":"+                            `;","html":"+\u003cspan class=pl-s\u003e                            `\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":27,"left":null,"right":27},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":28,"text":"+","html":"+","displayNoNewLineWarning":false,"position":28,"left":null,"right":28},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":29,"text":"+                            resultsDiv.appendChild(movieCard);","html":"+                            \u003cspan class=pl-s1\u003eresultsDiv\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eappendChild\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003emovieCard\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":29,"left":null,"right":29},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":30,"text":"+                        })","html":"+                        \u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":30,"left":null,"right":30},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":31,"text":"+                        .catch(error =\u003e console.error(\"Error fetching movie details:\", error));","html":"+                        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ecatch\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003eerror\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-smi\u003econsole\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eerror\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;Error fetching movie details:\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e,\u003c/span\u003e \u003cspan class=pl-s1\u003eerror\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":31,"left":null,"right":31},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":32,"text":"+                });","html":"+                \u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":32,"left":null,"right":32},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":33,"text":"+            } else {","html":"+            \u003cspan class=pl-kos\u003e}\u003c/span\u003e \u003cspan class=pl-k\u003eelse\u003c/span\u003e \u003cspan class=pl-kos\u003e{\u003c/span\u003e","displayNoNewLineWarning":false,"position":33,"left":null,"right":33},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":34,"text":"+                resultsDiv.innerHTML = \"\u003cp\u003eNo recommendations found.\u003c/p\u003e\";","html":"+                \u003cspan class=pl-s1\u003eresultsDiv\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-c1\u003einnerHTML\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u003c/span\u003e \u003cspan class=pl-s\u003e\u0026quot;\u0026lt;p\u0026gt;No recommendations found.\u0026lt;/p\u0026gt;\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":34,"left":null,"right":34},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":35,"text":"+            }","html":"+            \u003cspan class=pl-kos\u003e}\u003c/span\u003e","displayNoNewLineWarning":false,"position":35,"left":null,"right":35},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":36,"text":"+        })","html":"+        \u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e","displayNoNewLineWarning":false,"position":36,"left":null,"right":36},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":37,"text":"+        .catch(error =\u003e console.error(\"Error fetching recommendations:\", error));","html":"+        \u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003ecatch\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s1\u003eerror\u003c/span\u003e \u003cspan class=pl-c1\u003e=\u0026gt;\u003c/span\u003e \u003cspan class=pl-smi\u003econsole\u003c/span\u003e\u003cspan class=pl-kos\u003e.\u003c/span\u003e\u003cspan class=pl-en\u003eerror\u003c/span\u003e\u003cspan class=pl-kos\u003e(\u003c/span\u003e\u003cspan class=pl-s\u003e\u0026quot;Error fetching recommendations:\u0026quot;\u003c/span\u003e\u003cspan class=pl-kos\u003e,\u003c/span\u003e \u003cspan class=pl-s1\u003eerror\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":37,"left":null,"right":37},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":38,"text":"+});","html":"+\u003cspan class=pl-kos\u003e}\u003c/span\u003e\u003cspan class=pl-kos\u003e)\u003c/span\u003e\u003cspan class=pl-kos\u003e;\u003c/span\u003e","displayNoNewLineWarning":false,"position":38,"left":null,"right":38}],"diffNumber":2,"diffSize":"0 Bytes","isBinary":false,"isTooBig":false,"collapsed":false,"isSubmodule":false,"lineCount":38,"linesChanged":38,"newTreeEntry":{"lineCount":38,"path":"script.js","mode":100644,"isGenerated":false},"oldTreeEntry":null,"linesAdded":38,"linesDeleted":0,"path":"script.js","pathDigest":"ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3","status":"ADDED","truncatedReason":null,"oldOid":null,"newOid":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","copilotChatReference":null,"deletedSha":null,"canToggleRichDiff":false,"defaultToRichDiff":false,"proseDifffHtml":null,"renderInfo":null,"dependencyDiffPath":null,"submodule":null},{"diffLines":[{"stylingDirective":null,"type":"HUNK","blobLineNumber":0,"text":"@@ -0,0 +1,54 @@","html":"@@ -0,0 +1,54 @@","displayNoNewLineWarning":false,"position":0,"left":null,"right":0},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":1,"text":"+body {","html":"+\u003cspan class=pl-ent\u003ebody\u003c/span\u003e {","displayNoNewLineWarning":false,"position":1,"left":null,"right":1},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":2,"text":"+    font-family: Arial, sans-serif;","html":"+    \u003cspan class=pl-c1\u003efont-family\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e Arial\u003cspan class=pl-kos\u003e,\u003c/span\u003e sans-serif;","displayNoNewLineWarning":false,"position":2,"left":null,"right":2},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":3,"text":"+    background-color: #141414;","html":"+    \u003cspan class=pl-c1\u003ebackground-color\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-pds\u003e\u003cspan class=pl-kos\u003e#\u003c/span\u003e141414\u003c/span\u003e;","displayNoNewLineWarning":false,"position":3,"left":null,"right":3},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":4,"text":"+    color: white;","html":"+    \u003cspan class=pl-c1\u003ecolor\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e white;","displayNoNewLineWarning":false,"position":4,"left":null,"right":4},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":5,"text":"+    text-align: center;","html":"+    \u003cspan class=pl-c1\u003etext-align\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e center;","displayNoNewLineWarning":false,"position":5,"left":null,"right":5},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":6,"text":"+    margin: 0;","html":"+    \u003cspan class=pl-c1\u003emargin\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e0\u003c/span\u003e;","displayNoNewLineWarning":false,"position":6,"left":null,"right":6},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":7,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":7,"left":null,"right":7},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":8,"text":"+","html":"+","displayNoNewLineWarning":false,"position":8,"left":null,"right":8},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":9,"text":"+.container {","html":"+.\u003cspan class=pl-c1\u003econtainer\u003c/span\u003e {","displayNoNewLineWarning":false,"position":9,"left":null,"right":9},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":10,"text":"+    padding: 20px;","html":"+    \u003cspan class=pl-c1\u003epadding\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e20\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":10,"left":null,"right":10},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":11,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":11,"left":null,"right":11},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":12,"text":"+","html":"+","displayNoNewLineWarning":false,"position":12,"left":null,"right":12},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":13,"text":"+h1 {","html":"+\u003cspan class=pl-ent\u003eh1\u003c/span\u003e {","displayNoNewLineWarning":false,"position":13,"left":null,"right":13},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":14,"text":"+    font-size: 2rem;","html":"+    \u003cspan class=pl-c1\u003efont-size\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e2\u003cspan class=pl-smi\u003erem\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":14,"left":null,"right":14},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":15,"text":"+    margin-bottom: 20px;","html":"+    \u003cspan class=pl-c1\u003emargin-bottom\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e20\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":15,"left":null,"right":15},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":16,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":16,"left":null,"right":16},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":17,"text":"+","html":"+","displayNoNewLineWarning":false,"position":17,"left":null,"right":17},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":18,"text":"+input {","html":"+\u003cspan class=pl-ent\u003einput\u003c/span\u003e {","displayNoNewLineWarning":false,"position":18,"left":null,"right":18},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":19,"text":"+    padding: 10px;","html":"+    \u003cspan class=pl-c1\u003epadding\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e10\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":19,"left":null,"right":19},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":20,"text":"+    width: 300px;","html":"+    \u003cspan class=pl-c1\u003ewidth\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e300\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":20,"left":null,"right":20},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":21,"text":"+    margin-right: 10px;","html":"+    \u003cspan class=pl-c1\u003emargin-right\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e10\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":21,"left":null,"right":21},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":22,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":22,"left":null,"right":22},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":23,"text":"+","html":"+","displayNoNewLineWarning":false,"position":23,"left":null,"right":23},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":24,"text":"+button {","html":"+\u003cspan class=pl-ent\u003ebutton\u003c/span\u003e {","displayNoNewLineWarning":false,"position":24,"left":null,"right":24},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":25,"text":"+    padding: 10px 15px;","html":"+    \u003cspan class=pl-c1\u003epadding\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e10\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e \u003cspan class=pl-c1\u003e15\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":25,"left":null,"right":25},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":26,"text":"+    background-color: red;","html":"+    \u003cspan class=pl-c1\u003ebackground-color\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e red;","displayNoNewLineWarning":false,"position":26,"left":null,"right":26},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":27,"text":"+    color: white;","html":"+    \u003cspan class=pl-c1\u003ecolor\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e white;","displayNoNewLineWarning":false,"position":27,"left":null,"right":27},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":28,"text":"+    border: none;","html":"+    \u003cspan class=pl-c1\u003eborder\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e none;","displayNoNewLineWarning":false,"position":28,"left":null,"right":28},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":29,"text":"+    cursor: pointer;","html":"+    \u003cspan class=pl-c1\u003ecursor\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e pointer;","displayNoNewLineWarning":false,"position":29,"left":null,"right":29},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":30,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":30,"left":null,"right":30},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":31,"text":"+","html":"+","displayNoNewLineWarning":false,"position":31,"left":null,"right":31},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":32,"text":"+.movie-grid {","html":"+.\u003cspan class=pl-c1\u003emovie-grid\u003c/span\u003e {","displayNoNewLineWarning":false,"position":32,"left":null,"right":32},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":33,"text":"+    display: grid;","html":"+    \u003cspan class=pl-c1\u003edisplay\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e grid;","displayNoNewLineWarning":false,"position":33,"left":null,"right":33},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":34,"text":"+    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));","html":"+    \u003cspan class=pl-c1\u003egrid-template-columns\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-en\u003erepeat\u003c/span\u003e(auto-fit\u003cspan class=pl-kos\u003e,\u003c/span\u003e \u003cspan class=pl-en\u003eminmax\u003c/span\u003e(\u003cspan class=pl-c1\u003e150\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e\u003cspan class=pl-kos\u003e,\u003c/span\u003e \u003cspan class=pl-c1\u003e1\u003cspan class=pl-smi\u003efr\u003c/span\u003e\u003c/span\u003e));","displayNoNewLineWarning":false,"position":34,"left":null,"right":34},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":35,"text":"+    gap: 15px;","html":"+    \u003cspan class=pl-c1\u003egap\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e15\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":35,"left":null,"right":35},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":36,"text":"+    padding: 20px;","html":"+    \u003cspan class=pl-c1\u003epadding\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e20\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":36,"left":null,"right":36},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":37,"text":"+    justify-items: center;","html":"+    \u003cspan class=pl-c1\u003ejustify-items\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e center;","displayNoNewLineWarning":false,"position":37,"left":null,"right":37},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":38,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":38,"left":null,"right":38},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":39,"text":"+","html":"+","displayNoNewLineWarning":false,"position":39,"left":null,"right":39},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":40,"text":"+.movie-card {","html":"+.\u003cspan class=pl-c1\u003emovie-card\u003c/span\u003e {","displayNoNewLineWarning":false,"position":40,"left":null,"right":40},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":41,"text":"+    width: 150px;","html":"+    \u003cspan class=pl-c1\u003ewidth\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e150\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":41,"left":null,"right":41},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":42,"text":"+    text-align: center;","html":"+    \u003cspan class=pl-c1\u003etext-align\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e center;","displayNoNewLineWarning":false,"position":42,"left":null,"right":42},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":43,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":43,"left":null,"right":43},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":44,"text":"+","html":"+","displayNoNewLineWarning":false,"position":44,"left":null,"right":44},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":45,"text":"+.movie-card img {","html":"+.\u003cspan class=pl-c1\u003emovie-card\u003c/span\u003e \u003cspan class=pl-ent\u003eimg\u003c/span\u003e {","displayNoNewLineWarning":false,"position":45,"left":null,"right":45},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":46,"text":"+    width: 100%;","html":"+    \u003cspan class=pl-c1\u003ewidth\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e100\u003cspan class=pl-smi\u003e%\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":46,"left":null,"right":46},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":47,"text":"+    height: auto;","html":"+    \u003cspan class=pl-c1\u003eheight\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e auto;","displayNoNewLineWarning":false,"position":47,"left":null,"right":47},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":48,"text":"+    border-radius: 5px;","html":"+    \u003cspan class=pl-c1\u003eborder-radius\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e5\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":48,"left":null,"right":48},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":49,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":49,"left":null,"right":49},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":50,"text":"+","html":"+","displayNoNewLineWarning":false,"position":50,"left":null,"right":50},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":51,"text":"+.movie-title {","html":"+.\u003cspan class=pl-c1\u003emovie-title\u003c/span\u003e {","displayNoNewLineWarning":false,"position":51,"left":null,"right":51},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":52,"text":"+    font-size: 14px;","html":"+    \u003cspan class=pl-c1\u003efont-size\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e14\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":52,"left":null,"right":52},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":53,"text":"+    margin-top: 5px;","html":"+    \u003cspan class=pl-c1\u003emargin-top\u003c/span\u003e\u003cspan class=pl-kos\u003e:\u003c/span\u003e \u003cspan class=pl-c1\u003e5\u003cspan class=pl-smi\u003epx\u003c/span\u003e\u003c/span\u003e;","displayNoNewLineWarning":false,"position":53,"left":null,"right":53},{"stylingDirective":null,"type":"ADDITION","blobLineNumber":54,"text":"+}","html":"+}","displayNoNewLineWarning":false,"position":54,"left":null,"right":54}],"diffNumber":3,"diffSize":"0 Bytes","isBinary":false,"isTooBig":false,"collapsed":false,"isSubmodule":false,"lineCount":54,"linesChanged":54,"newTreeEntry":{"lineCount":54,"path":"style.css","mode":100644,"isGenerated":false},"oldTreeEntry":null,"linesAdded":54,"linesDeleted":0,"path":"style.css","pathDigest":"b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a","status":"ADDED","truncatedReason":null,"oldOid":null,"newOid":"2f2415ba8dd57b2949e44bb552f92d9fe947fd57","copilotChatReference":null,"deletedSha":null,"canToggleRichDiff":false,"defaultToRichDiff":false,"proseDifffHtml":null,"renderInfo":null,"dependencyDiffPath":null,"submodule":null}],"splitViewPreference":"unified","ignoreWhitespace":false,"repoOwnerGlobalRelayId":"U_kgDOC5ZtJg","commentsPreference":"visible","diffLineSpacingPreference":"relaxed","useMonospaceFont":false,"pasteUrlLinkAsPlainText":false,"userNotices":[{"name":"compact_diff_lines","dismissed":true}],"path":"/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57","fileTreeExpanded":true,"headerInfo":{"additions":146,"deletions":0,"filesChanged":4,"filesChangedString":"4"},"moreDiffsToLoad":false,"asyncDiffLoadInfo":{"startIndex":4,"truncated":false,"byteCount":4482,"lineShownCount":150},"commentInfo":{"canComment":true,"locked":false,"canLock":false,"repoArchived":false},"csrf_tokens":{"/users/diffview?diff=split":{"post":"9rfA7xr1z3RVx1rMcP0yNTn1fbGWDPxMGJvUa1glePW-m50RVuXpwJjgS42IvTma1utO-yLCmBwsSMvtKAr94A"},"/users/diffview?diff=unified":{"post":"A-mqV4WwhSb-3bHIvBFb8VmhH01jSoMv0BrF5j6AMtFLxfepyaCjkjP6oIlEUVBetr8sB9eE53_kydpgTq-3xA"},"/users/manojraul/pulls/settings/file_tree_visibility":{"put":"zvs5EiMuxXpA4og6W5Yz7PRFMEzuHb_C--OC_KEXXMdP8TwJzWg1ZT2HfBWIpaqWLGW38CFTP7GfoET7GImwNA"},"/notifications/thread":{"post":"oSXqKWtt13bXQBy1yHmXVo1v5roIsXGqYH5Jq94Lz_TsYGi3vl4_8wkKMJqembw51pOO1IIG-6rNuMEzyJeD3Q"}}},"title":"commit msg · ashu-7683/Movie_recommendation_system@2f2415b","appPayload":{"helpUrl":"https://docs.github.com","findInDiffWorkerPath":"/assets-cdn/worker/find-in-diff-worker-d62c14cd235a.js","enabled_features":{"show_pusher_on_commit_detail":false}}}</script>
  <div data-target="react-app.reactRoot"> <!-- --> <div class="d-none"></div><div style="--spacing:var(--spacing-none)" class="prc-PageLayout-PageLayoutRoot-1zlEO"><div class="prc-PageLayout-PageLayoutWrapper-s2ao4" data-width="full"><header class="prc-PageLayout-Header-mQXK1" style="--spacing:var(--spacing-none)"><div class="prc-PageLayout-HeaderContent-dVIQb" style="--spacing:var(--spacing-normal)"><div class="prc-PageHeader-PageHeader-sT1Hp"><div class="prc-PageHeader-TitleArea-jxJZy CommitHeader-module__PageHeader_TitleArea--aAkxF" data-component="TitleArea" data-size-variant="large"><h1 class="Box-sc-g0xbh4-0 prc-PageHeader-Title-LKOsd f2 CommitHeader-module__PageHeader_Title--W3dtK prc-Heading-Heading-6CmGO" data-component="PH_Title" data-hidden="false">Commit <span class="text-mono bgColor-muted rounded p-1">2f2415b</span></h1></div><div class="prc-PageHeader-Actions-ygtmj CommitHeader-module__commit-header-actions--Fj6HO" data-component="PH_Actions"><div class="d-flex gap-2 flex-items-center flex-md-justify-end"><span role="tooltip" aria-label="Browse the repository at this point in the history" id=":R1abab:" class="Tooltip__TooltipBase-sc-17tf59c-0 fiSvBN d-none d-md-flex CommitHeader-module__browseFilesTooltip--q3qJZ tooltipped-sw"><a class="prc-Button-ButtonBase-c50BI CommitHeader-module__browseFilesButton--hQymw prc-Link-Link-85e08" type="button" href="https://github.com/ashu-7683/Movie_recommendation_system/tree/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" data-loading="false" data-size="medium" data-variant="default" aria-describedby=":R3abab:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-code" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Browse files</span></span></a></span><a class="prc-Button-ButtonBase-c50BI d-flex d-md-none prc-Button-IconButton-szpyj prc-Link-Link-85e08" data-component="IconButton" type="button" href="https://github.com/ashu-7683/Movie_recommendation_system/tree/2f2415ba8dd57b2949e44bb552f92d9fe947fd57" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R7qbab:-loading-announcement" aria-labelledby=":R1qbab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-code" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></a><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":R1qbab:" popover="auto">Browse files</span></div></div><div class="prc-PageHeader-Description-kFg8r"><div class="d-flex flex-column gap-2 width-full"><div class="color-fg-muted CommitAttribution-module__CommitAttributionContainer--Si80C"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 AuthorAvatar-module__AuthorAvatarContainer--Z1TF8"><a class="prc-Link-Link-85e08" href="https://github.com/ashu-7683" data-testid="avatar-icon-link" data-hovercard-url="/users/ashu-7683/hovercard" aria-keyshortcuts="Alt+ArrowUp"><img data-component="Avatar" class="AuthorAvatar-module__authorAvatarImage--bQzij prc-Avatar-Avatar-ZRS-m" alt="ashu-7683" width="20" height="20" style="--avatarSize-regular:20px" src="./script_files/194407718" data-testid="github-avatar" aria-label="ashu-7683"></a><a class="Box-sc-g0xbh4-0 kVizpJ AuthorAvatar-module__authorHoverableLink--vw9qe prc-Link-Link-85e08" data-muted="true" muted="" href="https://github.com/ashu-7683/Movie_recommendation_system/commits?author=ashu-7683" aria-label="commits by ashu-7683" data-hovercard-url="/users/ashu-7683/hovercard" aria-keyshortcuts="Alt+ArrowUp">ashu-7683</a></div><span class="pl-1">committed</span><relative-time class="sc-aXZVg pl-1" datetime="2025-08-04T16:23:35.000Z" title="Aug 4, 2025, 9:53 PM GMT+5:30"><template shadowrootmode="open">on Aug 4</template>Aug 4, 2025</relative-time><div class="ml-2"></div></div><div class="color-bg-default position-relative border rounded-2 color-border-default mt-2 d-flex flex-column pt-0"><div class="CommitHeader-module__commit-message-container--y5fD_"><span class="ws-pre-wrap f5 wb-break-word text-mono prc-Text-Text-0ima0"><div>commit msg</div></span></div><div class="p-2 d-flex gap-2 flex-column flex-md-row flex-justify-between"><div class="d-flex flex-row flex-items-center"><div class="d-flex flex-items-center flex-wrap fgColor-muted gap-1"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch Octicon-sc-9kayk9-0 mr-1" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg><div><a href="https://github.com/ashu-7683/Movie_recommendation_system/compare/master" class="mx-1 prc-BranchName-BranchName-jFtg-">master</a></div></div></div><pre class="color-fg-muted d-flex flex-items-center">0 parents <!-- --> commit <span class="fgColor-default">2f2415b</span><div><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":R1slebab:-loading-announcement" aria-labelledby=":R4lebab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-cYMVY" data-direction="sw" aria-label="Copy full SHA for 2f2415b" aria-hidden="true" id=":R4lebab:" popover="auto">Copy full SHA for 2f2415b</span></div></pre></div></div></div></div></div></div><div class="prc-PageLayout-HorizontalDivider-CYLp5 prc-PageLayout-HeaderHorizontalDivider-bofyb" data-variant="line" style="--spacing-divider:var(--spacing-none);--spacing:var(--spacing-none)"></div></header><div class="prc-PageLayout-PageLayoutContent-jzDMn"><div class="prc-PageLayout-PaneWrapper-nGO0U Commit-module__Pane--jjRPV Commit-module__TreeExpanded--mn5GU" style="--offset-header:0px;--spacing-row:var(--spacing-none);--spacing-column:var(--spacing-none)" data-is-hidden="false" data-position="start" data-sticky="true"><div class="prc-PageLayout-HorizontalDivider-CYLp5 prc-PageLayout-PaneHorizontalDivider-4exOb" data-variant="none" data-position="start" style="--spacing-divider:var(--spacing-none);--spacing:var(--spacing-none)"></div><div class="prc-PageLayout-Pane-Vl5LI" data-resizable="true" style="--spacing:var(--spacing-normal);--pane-min-width:256px;--pane-max-width:calc(100vw - var(--pane-max-width-diff));--pane-width-size:var(--pane-width-medium);--pane-width:296px"><div class="d-flex flex-column gap-2" id="diff_file_tree" tabindex="-1"><div class="d-none"></div><h2 class="sr-only">File tree</h2><div class="d-md-none"><div class="d-flex flex-items-center flex-justify-between gap-2 pt-3 pt-lg-4 pb-2 position-sticky top-0 color-bg-default" style="z-index:2"><div class="d-flex flex-items-center"><button data-component="IconButton" type="button" data-testid="expand-file-tree-button" aria-expanded="false" aria-controls="diff_file_tree" class="prc-Button-ButtonBase-c50BI d-md-none position-relative fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":Rqatdab:-loading-announcement" aria-labelledby=":R2atdab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-collapse" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"></path><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="se" aria-hidden="true" id=":R2atdab:" popover="auto">Expand file tree</span><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-expanded="true" aria-controls="diff_file_tree" class="prc-Button-ButtonBase-c50BI d-none d-md-flex position-relative fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":Rsatdab:-loading-announcement" aria-labelledby=":R4atdab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="se" aria-hidden="true" id=":R4atdab:" popover="auto">Collapse file tree</span><h2 class="mx-2 f4 prc-Heading-Heading-6CmGO">4<!-- --> file<!-- -->s<!-- --> changed</h2><div class="ml-1 text-small text-bold fgColor-success d-none d-sm-flex">+<!-- -->146</div><div class="ml-1 text-small text-bold fgColor-danger d-none d-sm-flex">-<!-- -->0</div><span class="d-none d-sm-flex ml-2 fgColor-muted text-small" style="white-space:nowrap">lines changed</span></div><div class="d-flex gap-2 flex-items-center"><button type="button" class="prc-Button-ButtonBase-c50BI fgColor-default px-2 f6 gap-1" data-loading="false" data-size="medium" data-variant="invisible" aria-describedby=":rge:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Top</span></span></button><button class="Button Button--iconOnly Button--invisible" aria-label="Open diff view settings" id=":R1stdab:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-gear" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg></button></div></div></div><div id="diff-file-tree-filter" class="d-flex flex-nowrap gap-2"><span class="TextInput-wrapper prc-components-TextInputWrapper-i1ofR prc-components-TextInputBaseWrapper-ueK9q" data-block="true" data-size="medium" data-leading-visual="true" aria-busy="false"><span class="TextInput-icon" id=":R35dab:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Filter files…" placeholder="Filter files…" aria-describedby=":R35dab:" data-component="input" class="prc-components-Input-Ic-y8" value=""></span><button data-component="IconButton" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI flex-shrink-0 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R55dab:-loading-announcement" aria-labelledby=":R3t5dab:" id=":R55dab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-filter" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":R3t5dab:" popover="auto">Filter options</span></div><span class="prc-src-InternalVisuallyHidden-nlR9R" role="status" aria-live="polite" aria-atomic="true"></span><ul role="tree" aria-label="File Tree" data-truncate-text="true" class="prc-TreeView-TreeViewRootUlStyles-eZtxW"><li class="PRIVATE_TreeView-item DiffFileTree-module__file-tree-row--GJi_6 prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="app.py" role="treeitem" aria-label="app.py" aria-describedby=":RdddabH1:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level:1"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":Rdddab:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":RdddabH1:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-added fgColor-success" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.48 3.758a.75.75 0 0 1 .755.745l.01 1.497h1.497a.75.75 0 0 1 0 1.5H9v1.507a.75.75 0 0 1-1.5 0V9.005l-1.502.01a.75.75 0 0 1-.01-1.5l1.507-.01-.01-1.492a.75.75 0 0 1 .745-.755Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><a class="fgColor-default prc-Link-Link-85e08" data-muted="true" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959" muted="" role="presentation" tabindex="-1">app.py</a></span></div></div></li><li class="PRIVATE_TreeView-item DiffFileTree-module__file-tree-row--GJi_6 prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="index.html" role="treeitem" aria-label="index.html" aria-describedby=":RlddabH1:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level:1"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":Rlddab:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":RlddabH1:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-added fgColor-success" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.48 3.758a.75.75 0 0 1 .755.745l.01 1.497h1.497a.75.75 0 0 1 0 1.5H9v1.507a.75.75 0 0 1-1.5 0V9.005l-1.502.01a.75.75 0 0 1-.01-1.5l1.507-.01-.01-1.492a.75.75 0 0 1 .745-.755Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><a class="fgColor-default prc-Link-Link-85e08" data-muted="true" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051" muted="" role="presentation" tabindex="-1">index.html</a></span></div></div></li><li class="PRIVATE_TreeView-item DiffFileTree-module__file-tree-row--GJi_6 prc-TreeView-TreeViewItem-ShJr0" tabindex="0" id="script.js" role="treeitem" aria-label="script.js" aria-describedby=":RtddabH1:" aria-level="1" aria-selected="true"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level:1"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":Rtddab:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":RtddabH1:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-added fgColor-success" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.48 3.758a.75.75 0 0 1 .755.745l.01 1.497h1.497a.75.75 0 0 1 0 1.5H9v1.507a.75.75 0 0 1-1.5 0V9.005l-1.502.01a.75.75 0 0 1-.01-1.5l1.507-.01-.01-1.492a.75.75 0 0 1 .745-.755Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><a class="fgColor-default prc-Link-Link-85e08" data-muted="true" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3" muted="" role="presentation" tabindex="-1">script.js</a></span></div></div></li><li class="PRIVATE_TreeView-item DiffFileTree-module__file-tree-row--GJi_6 prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="style.css" role="treeitem" aria-label="style.css" aria-describedby=":R15ddabH1:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level:1"><div style="grid-area:spacer;display:flex"><div style="width:100%;display:flex"></div></div><div id=":R15ddab:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":R15ddabH1:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-added fgColor-success" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177l-2.914-2.914a.25.25 0 0 0-.177-.073Zm4.48 3.758a.75.75 0 0 1 .755.745l.01 1.497h1.497a.75.75 0 0 1 0 1.5H9v1.507a.75.75 0 0 1-1.5 0V9.005l-1.502.01a.75.75 0 0 1-.01-1.5l1.507-.01-.01-1.492a.75.75 0 0 1 .745-.755Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><a class="fgColor-default prc-Link-Link-85e08" data-muted="true" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a" muted="" role="presentation" tabindex="-1">style.css</a></span></div></div></li></ul></div></div><div class="prc-PageLayout-VerticalDivider-4A4Qm prc-PageLayout-PaneVerticalDivider-1c9vy" data-variant="line" data-position="start" style="--spacing:var(--spacing-none)"><div role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="761" aria-valuenow="296" aria-valuetext="Pane width 296 pixels" tabindex="0" class="Box-sc-g0xbh4-0 fFMzrG"></div></div></div><div class="prc-PageLayout-ContentWrapper-b-QRo Commit-module__SplitPageLayout_Content--uy_M4" data-is-hidden="false"><div class="prc-PageLayout-Content--F7-I" data-width="full" style="--spacing:var(--spacing-none)"><div id="diff-content-parent" tabindex="-1"><div data-hpc="true"><div class="d-flex flex-items-center flex-justify-between gap-2 pt-3 pt-lg-4 pb-2 position-sticky top-0 color-bg-default" style="z-index: 2;"><div class="d-flex flex-items-center"><button data-component="IconButton" type="button" data-testid="expand-file-tree-button" aria-expanded="false" aria-controls="diff_file_tree" class="prc-Button-ButtonBase-c50BI d-md-none position-relative fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":r1a:-loading-announcement" aria-labelledby=":r19:"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-collapse" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"></path><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="se" aria-hidden="true" id=":r19:" popover="auto">Expand file tree</span><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-expanded="true" aria-controls="diff_file_tree" class="prc-Button-ButtonBase-c50BI d-none d-md-flex position-relative fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":r1c:-loading-announcement" aria-labelledby=":r1b:"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="se" aria-hidden="true" id=":r1b:" popover="auto">Collapse file tree</span><h2 class="mx-2 f4 prc-Heading-Heading-6CmGO">4 files changed</h2><div class="ml-1 text-small text-bold fgColor-success d-none d-sm-flex">+146</div><div class="ml-1 text-small text-bold fgColor-danger d-none d-sm-flex">-0</div><span class="d-none d-sm-flex ml-2 fgColor-muted text-small" style="white-space: nowrap;">lines changed</span></div><div class="d-flex gap-2 flex-items-center"><button type="button" class="prc-Button-ButtonBase-c50BI fgColor-default px-2 f6 gap-1" data-loading="false" data-size="medium" data-variant="invisible" aria-describedby=":rgl:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Top</span></span></button><div class="DiffFind-module__defaultStyles--HqMRo"><div class="d-none"></div><div style="display: contents;"><span class="border-0 box-shadow-none TextInput-wrapper prc-components-TextInputWrapper-i1ofR prc-components-TextInputBaseWrapper-ueK9q" data-block="true" data-trailing-action="true" data-leading-visual="true" aria-busy="false"><span class="TextInput-icon" id=":r1f:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" autocomplete="off" name="Find in commit input" aria-label="Search within code" placeholder="Search within code" aria-describedby=":r1f:" data-component="input" class="prc-components-Input-Ic-y8" value="" style="width: 100%;"><div class="d-flex flex-row flex-justify-center flex-items-center"><span class="text-small fgColor-subtle mx-2 text-center pr-4">&nbsp;</span></div></span></div></div><button class="Button Button--iconOnly Button--invisible" aria-label="Open diff view settings" id=":r1i:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-gear" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg></button></div></div><div style="padding-top: 0px; left: 3px; right: 3px;"><div role="region" aria-labelledby="heading-:r1k:" class="position-relative" style="contain: layout;"><div class="Diff-module__diffHeaderWrapper--DiwLD" style="--header-sticky-offset: 0px;"><div class="DiffFileHeader-module__diff-file-header--Z8VIs flex-wrap flex-sm-nowrap"><div class="d-flex flex-shrink-0 flex-order-1" style="width: 28px; justify-content: center;"><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r1m:-loading-announcement" aria-labelledby=":r1l:"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":r1l:" popover="auto">Collapse file: app.py</span></div><div class="d-flex px-1 flex-items-center overflow-hidden flex-order-2 flex-sm-order-1"><h3 id="heading-:r1k:" class="DiffFileHeader-module__file-name--ryaCb"><a class="Link--primary prc-Link-Link-85e08" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959"><code>‎app.py‎</code></a></h3><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 flex-shrink-0 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r1p:-loading-announcement" aria-labelledby=":r1n:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-label="Copy file name to clipboard" aria-hidden="true" id=":r1n:" popover="auto" style="top: 431.667px; left: 394.672px;">Copy file name to clipboard</span></div><div class="d-flex flex-row flex-justify-end flex-1 flex-order-1 flex-sm-order-2 flex-items-center"><div class="d-flex mr-2 flex-justify-end flex-items-center flex-1"><div class="d-flex flex-items-center gap-1 pl-1"><span aria-hidden="true" class="f6 text-bold fgColor-success">+36</span><span class="sr-only">Lines changed: 36 additions &amp; 0 deletions</span><div class="d-flex"><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div></div></div></div><button class="Button Button--iconOnly Button--invisible" aria-label="More options" id=":r1q:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div><div class="border position-relative rounded-bottom-2"><table aria-label="Diff for: app.py" class="tab-size width-full DiffLines-module__tableLayoutFixed--InKAb" data-diff-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959" data-tab-size="4" data-paste-markdown-skip="true" role="grid" style="--line-number-cell-width: 40px; --line-number-cell-width-unified: 80px;"><thead class="sr-only"><tr><th scope="col">Original file line number</th><th scope="col">Diff line number</th><th scope="col">Diff line change</th></tr></thead><colgroup><col width="40"><col width="40"><col width="100%"></colgroup><tbody><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-0-0" data-selected="false" role="gridcell" tabindex="0" valign="top" class="focusable-grid-cell diff-hunk-cell left-side" colspan="4" style="background-color: var(--bgColor-accent-muted, var(--color-accent-subtle)); flex-grow: 1;"><div class="d-flex flex-row"><div class="hunk-kebab-icon pr-2 pb-1 hunk-kebab-icon-unified"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></div><code class="diff-text-cell hunk"><div class="diff-text-inner color-fg-muted">@@ -0,0 +1,36 @@</div></code></div></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-1-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-1-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>1</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-1-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">from</span> <span class="pl-s1">flask</span> <span class="pl-k">import</span> <span class="pl-v">Flask</span>, <span class="pl-s1">render_template</span>, <span class="pl-s1">request</span>, <span class="pl-s1">jsonify</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-2-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-2-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>2</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-2-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R2" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">import</span> <span class="pl-s1">pandas</span> <span class="pl-k">as</span> <span class="pl-s1">pd</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-3-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-3-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>3</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-3-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R3" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">import</span> <span class="pl-s1">os</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-4-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-4-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>4</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-4-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R4" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-5-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-5-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>5</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-5-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R5" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s1">app</span> <span class="pl-c1">=</span> <span class="pl-en">Flask</span>(<span class="pl-s1">__name__</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-6-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-6-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>6</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-6-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R6" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-7-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-7-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>7</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-7-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R7" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-c"># Load movie dataset</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-8-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-8-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>8</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-8-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R8" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s1">movies_path</span> <span class="pl-c1">=</span> <span class="pl-s1">os</span>.<span class="pl-c1">path</span>.<span class="pl-c1">join</span>(<span class="pl-s1">os</span>.<span class="pl-c1">path</span>.<span class="pl-c1">dirname</span>(<span class="pl-s1">__file__</span>), <span class="pl-s">"movies.csv"</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-9-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-9-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>9</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-9-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R9" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">if</span> <span class="pl-c1">not</span> <span class="pl-s1">os</span>.<span class="pl-c1">path</span>.<span class="pl-c1">exists</span>(<span class="pl-s1">movies_path</span>):</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-10-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-10-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>10</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-10-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R10" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-en">print</span>(<span class="pl-s">"❌ Error: movies.csv not found!"</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-11-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-11-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>11</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-11-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R11" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-en">exit</span>(<span class="pl-c1">1</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-12-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-12-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>12</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-12-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R12" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-13-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-13-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>13</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-13-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R13" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s1">movies</span> <span class="pl-c1">=</span> <span class="pl-s1">pd</span>.<span class="pl-c1">read_csv</span>(<span class="pl-s1">movies_path</span>, <span class="pl-s1">encoding</span><span class="pl-c1">=</span><span class="pl-s">"utf-8"</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-14-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-14-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>14</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-14-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R14" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s1">movies</span>[<span class="pl-s">"title"</span>] <span class="pl-c1">=</span> <span class="pl-s1">movies</span>[<span class="pl-s">"title"</span>].<span class="pl-c1">str</span>.<span class="pl-c1">lower</span>()  <span class="pl-c"># Convert to lowercase for case-insensitive search</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-15-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-15-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>15</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-15-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R15" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-16-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-16-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>16</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-16-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R16" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-en">@<span class="pl-s1">app</span>.<span class="pl-c1">route</span>(<span class="pl-s">"/"</span>)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-17-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-17-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>17</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-17-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R17" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">def</span> <span class="pl-en">home</span>():</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-18-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-18-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>18</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-18-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R18" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-k">return</span> <span class="pl-en">render_template</span>(<span class="pl-s">"index.html"</span>)</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-19-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-19-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>19</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-19-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R19" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-20-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-20-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>20</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-20-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R20" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-en">@<span class="pl-s1">app</span>.<span class="pl-c1">route</span>(<span class="pl-s">"/recommend"</span>, <span class="pl-s1">methods</span><span class="pl-c1">=</span>[<span class="pl-s">"GET"</span>])</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-21-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-21-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>21</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-21-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R21" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">def</span> <span class="pl-en">recommend</span>():</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-22-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-22-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>22</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-22-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R22" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-s1">movie_title</span> <span class="pl-c1">=</span> <span class="pl-s1">request</span>.<span class="pl-c1">args</span>.<span class="pl-c1">get</span>(<span class="pl-s">"title"</span>, <span class="pl-s">""</span>).<span class="pl-c1">strip</span>().<span class="pl-c1">lower</span>()</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-23-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-23-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>23</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-23-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R23" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-24-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-24-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>24</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-24-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R24" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-k">if</span> <span class="pl-c1">not</span> <span class="pl-s1">movie_title</span>:</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-25-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-25-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>25</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-25-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R25" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-k">return</span> <span class="pl-en">jsonify</span>({<span class="pl-s">"error"</span>: <span class="pl-s">"No movie title provided"</span>}), <span class="pl-c1">400</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-26-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-26-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>26</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-26-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R26" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    </div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-27-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-27-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>27</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-27-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R27" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-k">if</span> <span class="pl-s1">movie_title</span> <span class="pl-c1"><span class="pl-c1">not</span> <span class="pl-c1">in</span></span> <span class="pl-s1">movies</span>[<span class="pl-s">"title"</span>].<span class="pl-c1">values</span>:</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-28-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-28-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>28</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-28-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R28" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-k">return</span> <span class="pl-en">jsonify</span>({<span class="pl-s">"error"</span>: <span class="pl-s">"Movie not found"</span>}), <span class="pl-c1">404</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-29-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-29-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>29</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-29-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R29" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-30-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-30-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>30</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-30-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R30" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c"># Generate simple recommendations (5 random movies)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-31-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-31-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>31</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-31-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R31" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-s1">recommended_movies</span> <span class="pl-c1">=</span> <span class="pl-s1">movies</span>[<span class="pl-s1">movies</span>[<span class="pl-s">"title"</span>] <span class="pl-c1">!=</span> <span class="pl-s1">movie_title</span>].<span class="pl-c1">sample</span>(<span class="pl-c1">5</span>)[<span class="pl-s">"title"</span>].<span class="pl-c1">tolist</span>()</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-32-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-32-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>32</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-32-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R32" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    </div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-33-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-33-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>33</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-33-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R33" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-k">return</span> <span class="pl-en">jsonify</span>({<span class="pl-s">"recommended"</span>: <span class="pl-s1">recommended_movies</span>})</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-34-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-34-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>34</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-34-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R34" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-35-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-35-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>35</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-35-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R35" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">if</span> <span class="pl-s1">__name__</span> <span class="pl-c1">==</span> <span class="pl-s">"__main__"</span>:</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-36-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-36-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>36</code></td><td data-grid-cell-id="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959-empty-36-2" data-line-anchor="diff-568470d013cd12e4f388206520da39ab9a4e4c3c6b95846cbc281abc1ba3c959R36" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-s1">app</span>.<span class="pl-c1">run</span>(<span class="pl-s1">debug</span><span class="pl-c1">=</span><span class="pl-c1">True</span>)</div></code></td></tr></tbody></table></div></div></div><div style="padding-top: 16px; left: 3px; right: 3px;"><div role="region" aria-labelledby="heading-:r59:" class="position-relative" style="contain: layout;"><div class="Diff-module__diffHeaderWrapper--DiwLD" style="--header-sticky-offset: 0px;"><div class="DiffFileHeader-module__diff-file-header--Z8VIs flex-wrap flex-sm-nowrap"><div class="d-flex flex-shrink-0 flex-order-1" style="width: 28px; justify-content: center;"><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r5b:-loading-announcement" aria-labelledby=":r5a:"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":r5a:" popover="auto">Collapse file: index.html</span></div><div class="d-flex px-1 flex-items-center overflow-hidden flex-order-2 flex-sm-order-1"><h3 id="heading-:r59:" class="DiffFileHeader-module__file-name--ryaCb"><a class="Link--primary prc-Link-Link-85e08" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051"><code>‎index.html‎</code></a></h3><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 flex-shrink-0 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r5e:-loading-announcement" aria-labelledby=":r5c:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-label="Copy file name to clipboard" aria-hidden="true" id=":r5c:" popover="auto">Copy file name to clipboard</span></div><div class="d-flex flex-row flex-justify-end flex-1 flex-order-1 flex-sm-order-2 flex-items-center"><div class="d-flex mr-2 flex-justify-end flex-items-center flex-1"><div class="d-flex flex-items-center gap-1 pl-1"><span aria-hidden="true" class="f6 text-bold fgColor-success">+18</span><span class="sr-only">Lines changed: 18 additions &amp; 0 deletions</span><div class="d-flex"><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div></div></div></div><button class="Button Button--iconOnly Button--invisible" aria-label="More options" id=":r5f:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div><div class="border position-relative rounded-bottom-2"><table aria-label="Diff for: index.html" class="tab-size width-full DiffLines-module__tableLayoutFixed--InKAb" data-diff-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051" data-tab-size="4" data-paste-markdown-skip="true" role="grid" style="--line-number-cell-width: 40px; --line-number-cell-width-unified: 80px;"><thead class="sr-only"><tr><th scope="col">Original file line number</th><th scope="col">Diff line number</th><th scope="col">Diff line change</th></tr></thead><colgroup><col width="40"><col width="40"><col width="100%"></colgroup><tbody><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-0-0" data-selected="false" role="gridcell" tabindex="0" valign="top" class="focusable-grid-cell diff-hunk-cell left-side" colspan="4" style="background-color: var(--bgColor-accent-muted, var(--color-accent-subtle)); flex-grow: 1;"><div class="d-flex flex-row"><div class="hunk-kebab-icon pr-2 pb-1 hunk-kebab-icon-unified"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></div><code class="diff-text-cell hunk"><div class="diff-text-inner color-fg-muted">@@ -0,0 +1,18 @@</div></code></div></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-1-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-1-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>1</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-1-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-c1">&lt;!DOCTYPE html<span class="pl-kos">&gt;</span></span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-2-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-2-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>2</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-2-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R2" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;</span><span class="pl-ent">html</span> <span class="pl-c1">lang</span>="<span class="pl-s">en</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-3-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-3-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>3</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-3-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R3" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;</span><span class="pl-ent">head</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-4-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-4-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>4</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-4-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R4" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">meta</span> <span class="pl-c1">charset</span>="<span class="pl-s">UTF-8</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-5-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-5-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>5</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-5-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R5" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">meta</span> <span class="pl-c1">name</span>="<span class="pl-s">viewport</span>" <span class="pl-c1">content</span>="<span class="pl-s">width=device-width, initial-scale=1.0</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-6-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-6-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>6</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-6-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R6" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">title</span><span class="pl-kos">&gt;</span>Netflix-Style Movie Recommendations<span class="pl-kos">&lt;/</span><span class="pl-ent">title</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-7-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-7-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>7</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-7-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R7" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">link</span> <span class="pl-c1">rel</span>="<span class="pl-s">stylesheet</span>" <span class="pl-c1">href</span>="<span class="pl-s">{{ url_for('static', filename='style.css') }}</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-8-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-8-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>8</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-8-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R8" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;/</span><span class="pl-ent">head</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-9-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-9-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>9</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-9-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R9" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;</span><span class="pl-ent">body</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-10-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-10-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>10</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-10-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R10" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">class</span>="<span class="pl-s">container</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-11-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-11-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>11</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-11-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R11" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">&lt;</span><span class="pl-ent">h1</span><span class="pl-kos">&gt;</span>🎬 Find Your Next Movie<span class="pl-kos">&lt;/</span><span class="pl-ent">h1</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-12-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-12-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>12</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-12-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R12" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">&lt;</span><span class="pl-ent">input</span> <span class="pl-c1">type</span>="<span class="pl-s">text</span>" <span class="pl-c1">id</span>="<span class="pl-s">search-input</span>" <span class="pl-c1">placeholder</span>="<span class="pl-s">Search for a movie...</span>"<span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-13-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-13-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>13</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-13-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R13" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">&lt;</span><span class="pl-ent">button</span> <span class="pl-c1">id</span>="<span class="pl-s">search-btn</span>"<span class="pl-kos">&gt;</span>Search<span class="pl-kos">&lt;/</span><span class="pl-ent">button</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-14-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-14-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>14</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-14-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R14" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">id</span>="<span class="pl-s">results</span>" <span class="pl-c1">class</span>="<span class="pl-s">movie-grid</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-15-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-15-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>15</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-15-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R15" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;/</span><span class="pl-ent">div</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-16-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-16-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>16</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-16-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R16" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-kos">&lt;</span><span class="pl-ent">script</span> <span class="pl-c1">src</span>="<span class="pl-s">{{ url_for('static', filename='script.js') }}</span>"<span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-17-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-17-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>17</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-17-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R17" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;/</span><span class="pl-ent">body</span><span class="pl-kos">&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-18-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-18-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>18</code></td><td data-grid-cell-id="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051-empty-18-2" data-line-anchor="diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R18" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">&lt;/</span><span class="pl-ent">html</span><span class="pl-kos">&gt;</span></div></code></td></tr></tbody></table></div></div></div><div style="padding-top: 16px; left: 3px; right: 3px;"><div role="region" aria-labelledby="heading-:r78:" class="position-relative" style="contain: layout;"><div class="Diff-module__diffHeaderWrapper--DiwLD" style="--header-sticky-offset: 0px;"><div class="DiffFileHeader-module__diff-file-header--Z8VIs flex-wrap flex-sm-nowrap"><div class="d-flex flex-shrink-0 flex-order-1" style="width: 28px; justify-content: center;"><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r7a:-loading-announcement" aria-labelledby=":r79:"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":r79:" popover="auto">Collapse file: script.js</span></div><div class="d-flex px-1 flex-items-center overflow-hidden flex-order-2 flex-sm-order-1"><h3 id="heading-:r78:" class="DiffFileHeader-module__file-name--ryaCb"><a class="Link--primary prc-Link-Link-85e08" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3"><code>‎script.js‎</code></a></h3><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 flex-shrink-0 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r7d:-loading-announcement" aria-labelledby=":r7b:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-label="Copy file name to clipboard" aria-hidden="true" id=":r7b:" popover="auto">Copy file name to clipboard</span></div><div class="d-flex flex-row flex-justify-end flex-1 flex-order-1 flex-sm-order-2 flex-items-center"><div class="d-flex mr-2 flex-justify-end flex-items-center flex-1"><div class="d-flex flex-items-center gap-1 pl-1"><span aria-hidden="true" class="f6 text-bold fgColor-success">+38</span><span class="sr-only">Lines changed: 38 additions &amp; 0 deletions</span><div class="d-flex"><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div></div></div></div><button class="Button Button--iconOnly Button--invisible" aria-label="More options" id=":r7e:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div><div class="border position-relative rounded-bottom-2"><table aria-label="Diff for: script.js" class="tab-size width-full DiffLines-module__tableLayoutFixed--InKAb" data-diff-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3" data-tab-size="4" data-paste-markdown-skip="true" role="grid" style="--line-number-cell-width: 40px; --line-number-cell-width-unified: 80px;"><thead class="sr-only"><tr><th scope="col">Original file line number</th><th scope="col">Diff line number</th><th scope="col">Diff line change</th></tr></thead><colgroup><col width="40"><col width="40"><col width="100%"></colgroup><tbody><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-0-0" data-selected="false" role="gridcell" tabindex="0" valign="top" class="focusable-grid-cell diff-hunk-cell left-side" colspan="4" style="background-color: var(--bgColor-accent-muted, var(--color-accent-subtle)); flex-grow: 1;"><div class="d-flex flex-row"><div class="hunk-kebab-icon pr-2 pb-1 hunk-kebab-icon-unified"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></div><code class="diff-text-cell hunk"><div class="diff-text-inner color-fg-muted">@@ -0,0 +1,38 @@</div></code></div></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-1-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-1-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>1</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-1-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-k">const</span> <span class="pl-c1">API_KEY</span> <span class="pl-c1">=</span> <span class="pl-s">"36bce817"</span><span class="pl-kos">;</span>  <span class="pl-c">// Your OMDb API Key  36bce817</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-2-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-2-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>2</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-2-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R2" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-3-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-3-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>3</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-3-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R3" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"search-btn"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"click"</span><span class="pl-kos">,</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-4-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-4-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>4</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-4-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R4" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-k">let</span> <span class="pl-s1">movieTitle</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"search-input"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">value</span><span class="pl-kos">.</span><span class="pl-en">trim</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-5-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-5-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>5</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-5-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R5" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-6-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-6-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>6</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-6-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R6" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-en">fetch</span><span class="pl-kos">(</span><span class="pl-s">`/recommend?title=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">movieTitle</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-7-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-7-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>7</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-7-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R7" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">response</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">response</span><span class="pl-kos">.</span><span class="pl-en">json</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-8-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-8-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>8</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-8-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R8" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">data</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-9-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-9-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>9</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-9-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R9" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">            <span class="pl-k">let</span> <span class="pl-s1">resultsDiv</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"results"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-10-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-10-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>10</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-10-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R10" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">            <span class="pl-s1">resultsDiv</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">""</span><span class="pl-kos">;</span> <span class="pl-c">// Clear previous results</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-11-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-11-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>11</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-11-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R11" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-12-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-12-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>12</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-12-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R12" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">recommended</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-13-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-13-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>13</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-13-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R13" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">recommended</span><span class="pl-kos">.</span><span class="pl-en">forEach</span><span class="pl-kos">(</span><span class="pl-s1">movie</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-14-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-14-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>14</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-14-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R14" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                    <span class="pl-en">fetch</span><span class="pl-kos">(</span><span class="pl-s">`https://www.omdbapi.com/?t=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-en">encodeURIComponent</span><span class="pl-kos">(</span><span class="pl-s1">movie</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>&amp;apikey=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-c1">API_KEY</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-15-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-15-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>15</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-15-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R15" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">response</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">response</span><span class="pl-kos">.</span><span class="pl-en">json</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-16-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-16-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>16</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-16-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R16" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">movieData</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-17-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-17-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>17</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-17-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R17" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                            <span class="pl-k">let</span> <span class="pl-s1">movieCard</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">createElement</span><span class="pl-kos">(</span><span class="pl-s">"div"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-18-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-18-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>18</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-18-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R18" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                            <span class="pl-s1">movieCard</span><span class="pl-kos">.</span><span class="pl-c1">classList</span><span class="pl-kos">.</span><span class="pl-en">add</span><span class="pl-kos">(</span><span class="pl-s">"movie-card"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-19-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-19-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>19</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-19-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R19" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-20-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-20-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>20</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-20-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R20" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                            <span class="pl-k">let</span> <span class="pl-s1">poster</span> <span class="pl-c1">=</span> <span class="pl-s1">movieData</span><span class="pl-kos">.</span><span class="pl-c1">Poster</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">movieData</span><span class="pl-kos">.</span><span class="pl-c1">Poster</span> <span class="pl-c1">!==</span> <span class="pl-s">"N/A"</span> </div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-21-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-21-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>21</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-21-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R21" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                                ? <span class="pl-s1">movieData</span><span class="pl-kos">.</span><span class="pl-c1">Poster</span> </div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-22-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-22-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>22</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-22-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R22" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                                : <span class="pl-s">"https://via.placeholder.com/150"</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-23-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-23-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>23</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-23-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R23" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-24-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-24-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>24</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-24-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R24" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                            <span class="pl-s1">movieCard</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">`</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-25-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-25-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>25</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-25-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R25" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s">                                &lt;img src="<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">poster</span><span class="pl-kos">}</span></span>" alt="<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">movie</span><span class="pl-kos">}</span></span>"&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-26-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-26-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>26</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-26-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R26" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s">                                &lt;div class="movie-title"&gt;<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">movie</span><span class="pl-kos">}</span></span>&lt;/div&gt;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-27-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-27-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>27</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-27-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R27" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-s">                            `</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-28-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-28-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>28</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-28-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R28" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-29-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-29-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>29</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-29-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R29" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                            <span class="pl-s1">resultsDiv</span><span class="pl-kos">.</span><span class="pl-en">appendChild</span><span class="pl-kos">(</span><span class="pl-s1">movieCard</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-30-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-30-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>30</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-30-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R30" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                        <span class="pl-kos">}</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-31-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-31-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>31</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-31-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R31" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                        <span class="pl-kos">.</span><span class="pl-en">catch</span><span class="pl-kos">(</span><span class="pl-s1">error</span> <span class="pl-c1">=&gt;</span> <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">error</span><span class="pl-kos">(</span><span class="pl-s">"Error fetching movie details:"</span><span class="pl-kos">,</span> <span class="pl-s1">error</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-32-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-32-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>32</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-32-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R32" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-33-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-33-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>33</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-33-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R33" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">            <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-34-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-34-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>34</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-34-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R34" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">                <span class="pl-s1">resultsDiv</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">"&lt;p&gt;No recommendations found.&lt;/p&gt;"</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-35-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-35-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>35</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-35-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R35" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">            <span class="pl-kos">}</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-36-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-36-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>36</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-36-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R36" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">}</span><span class="pl-kos">)</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-37-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-37-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>37</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-37-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R37" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">        <span class="pl-kos">.</span><span class="pl-en">catch</span><span class="pl-kos">(</span><span class="pl-s1">error</span> <span class="pl-c1">=&gt;</span> <span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">error</span><span class="pl-kos">(</span><span class="pl-s">"Error fetching recommendations:"</span><span class="pl-kos">,</span> <span class="pl-s1">error</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-38-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-38-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>38</code></td><td data-grid-cell-id="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3-empty-38-2" data-line-anchor="diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R38" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></code></td></tr></tbody></table></div></div></div><div style="padding-top: 16px; left: 3px; right: 3px;"><div role="region" aria-labelledby="heading-:rb3:" class="position-relative" style="contain: layout;"><div class="Diff-module__diffHeaderWrapper--DiwLD" style="--header-sticky-offset: 0px;"><div class="DiffFileHeader-module__diff-file-header--Z8VIs flex-wrap flex-sm-nowrap"><div class="d-flex flex-shrink-0 flex-order-1" style="width: 28px; justify-content: center;"><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":rb5:-loading-announcement" aria-labelledby=":rb4:"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":rb4:" popover="auto">Collapse file: style.css</span></div><div class="d-flex px-1 flex-items-center overflow-hidden flex-order-2 flex-sm-order-1"><h3 id="heading-:rb3:" class="DiffFileHeader-module__file-name--ryaCb"><a class="Link--primary prc-Link-Link-85e08" href="https://github.com/ashu-7683/Movie_recommendation_system/commit/2f2415ba8dd57b2949e44bb552f92d9fe947fd57#diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a"><code>‎style.css‎</code></a></h3><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 flex-shrink-0 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":rb8:-loading-announcement" aria-labelledby=":rb6:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--HDUYz prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-label="Copy file name to clipboard" aria-hidden="true" id=":rb6:" popover="auto">Copy file name to clipboard</span></div><div class="d-flex flex-row flex-justify-end flex-1 flex-order-1 flex-sm-order-2 flex-items-center"><div class="d-flex mr-2 flex-justify-end flex-items-center flex-1"><div class="d-flex flex-items-center gap-1 pl-1"><span aria-hidden="true" class="f6 text-bold fgColor-success">+54</span><span class="sr-only">Lines changed: 54 additions &amp; 0 deletions</span><div class="d-flex"><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div><div data-testid="addition diffstat" class="DiffSquares-module__diffSquare--KZMTU DiffSquares-module__addition--kxGde"></div></div></div></div><button class="Button Button--iconOnly Button--invisible" aria-label="More options" id=":rb9:" aria-haspopup="true" aria-expanded="false" tabindex="0"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div><div class="border position-relative rounded-bottom-2"><table aria-label="Diff for: style.css" class="tab-size width-full DiffLines-module__tableLayoutFixed--InKAb" data-diff-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a" data-tab-size="4" data-paste-markdown-skip="true" role="grid" style="--line-number-cell-width: 40px; --line-number-cell-width-unified: 80px;"><thead class="sr-only"><tr><th scope="col">Original file line number</th><th scope="col">Diff line number</th><th scope="col">Diff line change</th></tr></thead><colgroup><col width="40"><col width="40"><col width="100%"></colgroup><tbody><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-0-0" data-selected="false" role="gridcell" tabindex="0" valign="top" class="focusable-grid-cell diff-hunk-cell left-side" colspan="4" style="background-color: var(--bgColor-accent-muted, var(--color-accent-subtle)); flex-grow: 1;"><div class="d-flex flex-row"><div class="hunk-kebab-icon pr-2 pb-1 hunk-kebab-icon-unified"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></div><code class="diff-text-cell hunk"><div class="diff-text-inner color-fg-muted">@@ -0,0 +1,54 @@</div></code></div></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-1-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-1-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>1</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-1-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-ent">body</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-2-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-2-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>2</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-2-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR2" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">font-family</span><span class="pl-kos">:</span> Arial<span class="pl-kos">,</span> sans-serif;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-3-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-3-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>3</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-3-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR3" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">background-color</span><span class="pl-kos">:</span> <span class="pl-pds"><span class="pl-kos">#</span>141414</span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-4-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-4-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>4</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-4-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR4" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">color</span><span class="pl-kos">:</span> white;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-5-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-5-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>5</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-5-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR5" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">text-align</span><span class="pl-kos">:</span> center;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-6-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-6-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>6</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-6-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR6" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">margin</span><span class="pl-kos">:</span> <span class="pl-c1">0</span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-7-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-7-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>7</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-7-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR7" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-8-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-8-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>8</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-8-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR8" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-9-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-9-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>9</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-9-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR9" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">.<span class="pl-c1">container</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-10-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-10-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>10</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-10-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR10" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">20<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-11-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-11-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>11</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-11-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR11" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-12-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-12-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>12</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-12-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR12" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-13-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-13-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>13</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-13-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR13" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-ent">h1</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-14-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-14-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>14</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-14-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR14" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">font-size</span><span class="pl-kos">:</span> <span class="pl-c1">2<span class="pl-smi">rem</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-15-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-15-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>15</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-15-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR15" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">margin-bottom</span><span class="pl-kos">:</span> <span class="pl-c1">20<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-16-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-16-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>16</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-16-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR16" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-17-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-17-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>17</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-17-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR17" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-18-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-18-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>18</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-18-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR18" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-ent">input</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-19-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-19-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>19</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-19-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR19" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">10<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-20-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-20-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>20</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-20-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR20" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">width</span><span class="pl-kos">:</span> <span class="pl-c1">300<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-21-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-21-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>21</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-21-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR21" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">margin-right</span><span class="pl-kos">:</span> <span class="pl-c1">10<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-22-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-22-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>22</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-22-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR22" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-23-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-23-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>23</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-23-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR23" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-24-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-24-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>24</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-24-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR24" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"><span class="pl-ent">button</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-25-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-25-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>25</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-25-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR25" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">10<span class="pl-smi">px</span></span> <span class="pl-c1">15<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-26-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-26-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>26</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-26-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR26" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">background-color</span><span class="pl-kos">:</span> red;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-27-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-27-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>27</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-27-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR27" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">color</span><span class="pl-kos">:</span> white;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-28-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-28-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>28</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-28-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR28" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">border</span><span class="pl-kos">:</span> none;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-29-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-29-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>29</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-29-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR29" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">cursor</span><span class="pl-kos">:</span> pointer;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-30-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-30-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>30</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-30-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR30" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-31-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-31-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>31</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-31-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR31" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-32-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-32-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>32</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-32-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR32" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">.<span class="pl-c1">movie-grid</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-33-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-33-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>33</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-33-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR33" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">display</span><span class="pl-kos">:</span> grid;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-34-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-34-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>34</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-34-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR34" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">grid-template-columns</span><span class="pl-kos">:</span> <span class="pl-en">repeat</span>(auto-fit<span class="pl-kos">,</span> <span class="pl-en">minmax</span>(<span class="pl-c1">150<span class="pl-smi">px</span></span><span class="pl-kos">,</span> <span class="pl-c1">1<span class="pl-smi">fr</span></span>));</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-35-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-35-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>35</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-35-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR35" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">gap</span><span class="pl-kos">:</span> <span class="pl-c1">15<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-36-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-36-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>36</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-36-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR36" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">padding</span><span class="pl-kos">:</span> <span class="pl-c1">20<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-37-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-37-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>37</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-37-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR37" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">justify-items</span><span class="pl-kos">:</span> center;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-38-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-38-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>38</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-38-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR38" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-39-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-39-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>39</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-39-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR39" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-40-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-40-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>40</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-40-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR40" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">.<span class="pl-c1">movie-card</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-41-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-41-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>41</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-41-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR41" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">width</span><span class="pl-kos">:</span> <span class="pl-c1">150<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-42-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-42-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>42</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-42-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR42" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">text-align</span><span class="pl-kos">:</span> center;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-43-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-43-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>43</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-43-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR43" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-44-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-44-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>44</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-44-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR44" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-45-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-45-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>45</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-45-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR45" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">.<span class="pl-c1">movie-card</span> <span class="pl-ent">img</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-46-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-46-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>46</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-46-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR46" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">width</span><span class="pl-kos">:</span> <span class="pl-c1">100<span class="pl-smi">%</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-47-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-47-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>47</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-47-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR47" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">height</span><span class="pl-kos">:</span> auto;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-48-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-48-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>48</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-48-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR48" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">border-radius</span><span class="pl-kos">:</span> <span class="pl-c1">5<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-49-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-49-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>49</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-49-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR49" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-50-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-50-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>50</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-50-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR50" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell pt-4 left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner"></div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-51-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-51-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>51</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-51-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR51" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">.<span class="pl-c1">movie-title</span> {</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-52-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-52-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>52</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-52-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR52" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">font-size</span><span class="pl-kos">:</span> <span class="pl-c1">14<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-53-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-53-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>53</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-53-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR53" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">    <span class="pl-c1">margin-top</span><span class="pl-kos">:</span> <span class="pl-c1">5<span class="pl-smi">px</span></span>;</div></code></td></tr><tr class="diff-line-row"><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-54-0" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code></code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-54-1" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-line-number position-relative left-side" style="background-color: var(--diffBlob-additionNum-bgColor, var(--diffBlob-addition-bgColor-num)); text-align: center;"><code>54</code></td><td data-grid-cell-id="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7a-empty-54-2" data-line-anchor="diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR54" data-selected="false" role="gridcell" tabindex="-1" valign="top" class="focusable-grid-cell diff-text-cell right-side-diff-cell  left-side" style="background-color: var(--diffBlob-additionLine-bgColor, var(--diffBlob-addition-bgColor-line)); padding-right: 24px;"><code class="diff-text syntax-highlighted-line addition"><span class="diff-text-marker">+</span><div class="diff-text-inner">}</div></code></td></tr></tbody></table></div></div></div></div><div class="d-flex flex-column gap-2 pt-3 react-comments-container Comment-module__commit-discussion-comments--GlkCu" id="comments"><div class="d-flex flex-items-center flex-justify-between"><h2 class="sr-only">0<!-- --> commit comments</h2><div class="d-flex flex-items-center"><div class="h4 pr-2">Comments</div><span aria-hidden="true" data-scheme="secondary" class="prc-CounterLabel-CounterLabel-ZwXPe">0</span><span class="prc-VisuallyHidden-VisuallyHidden-UNWQp">&nbsp;(<!-- -->0<!-- -->)</span></div></div><div class="d-flex flex-column gap-2 pt-3"><div id="react-issue-comment-composer" class="d-flex flex-items-center border rounded-2 p-2 gap-2 color-bg-subtle"><img data-component="Avatar" class="prc-Avatar-Avatar-ZRS-m" alt="" width="20" height="20" src="./script_files/200089978(1)" data-testid="github-avatar" style="--avatarSize-regular: 20px;"><button type="button" class="CompactCommentButton-module__CompactCommentInputContainer--mPD5I">Comment</button></div></div><div class="d-flex flex-items-center border rounded-2 p-2 gap-2"><button type="button" class="prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="default" aria-describedby=":rgg:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-bell" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Subscribe</span></span></button><p role="status" class="f6 fgColor-muted mb-0">You're not receiving notifications from this thread.</p></div></div><svg aria-hidden="true" version="1.1" viewBox="0 0 340 84" xmlns="http://www.w3.org/2000/svg" class="DiffPlaceholder-module__DiffPlaceholderSVG--zRrf1"><defs><clippath id="diff-placeholder"><rect height="11.9298746" rx="2" width="67.0175439" x="0" y="0"></rect><rect height="11.9298746" rx="2" width="100.701754" x="18.9473684" y="47.7194983"></rect><rect height="11.9298746" rx="2" width="37.8947368" x="0" y="71.930126"></rect><rect height="11.9298746" rx="2" width="53.3333333" x="127.017544" y="48.0703769"></rect><rect height="11.9298746" rx="2" width="72.9824561" x="187.719298" y="48.0703769"></rect><rect height="11.9298746" rx="2" width="140.350877" x="76.8421053" y="0"></rect><rect height="11.9298746" rx="2" width="140.350877" x="17.8947368" y="23.8597491"></rect><rect height="11.9298746" rx="2" width="173.684211" x="166.315789" y="23.8597491"></rect></clippath><lineargradient id="animated-diff-gradient" spreadMethod="reflect" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#eee"></stop><stop offset="0.2" stop-color="#eee"></stop><stop offset="0.5" stop-color="#ddd"></stop><stop offset="0.8" stop-color="#eee"></stop><stop offset="1" stop-color="#eee"></stop><animatetransform attributeName="y1" dur="1s" repeatCount="3" values="0%; 100%; 0"></animatetransform><animatetransform attributeName="y2" dur="1s" repeatCount="3" values="100%; 200%; 0"></animatetransform></lineargradient></defs></svg></div></div></div></div></div></div> <!-- --> <script type="application/json" id="__PRIMER_DATA_:R0:__">{"resolvedServerColorMode":"night"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="GitHub Homepage" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
</a>
      <span>
        © 2025 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

            <li class="mx-2">
              <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to community&quot;,&quot;label&quot;:&quot;text:community&quot;}" href="https://github.community/" data-view-component="true" class="Link--secondary Link">Community</a>
            </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}">
       Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent text-left" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>



    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-locale="en" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>




  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/manojraul"] {
        color: var(--color-user-mention-fg);
        background-color: var(--bgColor-attention-muted, var(--color-attention-subtle));
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
      }
      .user-mention[href$="/manojraul"]:before,
      .user-mention[href$="/manojraul"]:after {
        content: '';
        display: inline-block;
        width: 2px;
      }
    </style>


    </div>
    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true">Copied!</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


</body></html>