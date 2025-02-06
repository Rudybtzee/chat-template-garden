export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      animations: {
        Row: {
          created_at: string
          data: Json
          id: string
          thumbnail: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
          thumbnail: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          thumbnail?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      audio_tracks: {
        Row: {
          artist: string | null
          bpm: number | null
          created_at: string
          duration: number | null
          file_path: string
          file_size: number
          file_type: string
          genre: string | null
          id: string
          key: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          artist?: string | null
          bpm?: number | null
          created_at?: string
          duration?: number | null
          file_path: string
          file_size: number
          file_type: string
          genre?: string | null
          id?: string
          key?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          artist?: string | null
          bpm?: number | null
          created_at?: string
          duration?: number | null
          file_path?: string
          file_size?: number
          file_type?: string
          genre?: string | null
          id?: string
          key?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      beats_promotions: {
        Row: {
          code: string
          created_at: string
          current_uses: number | null
          discount_percent: number
          ends_at: string
          id: string
          is_active: boolean | null
          max_uses: number | null
          starts_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          current_uses?: number | null
          discount_percent: number
          ends_at: string
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          starts_at: string
          updated_at?: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          current_uses?: number | null
          discount_percent?: number
          ends_at?: string
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          starts_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      beats_sales: {
        Row: {
          amount_paid: number
          beat_id: string
          buyer_id: string
          created_at: string
          id: string
          license_type: string
          seller_id: string
          status: string
          transaction_id: string
        }
        Insert: {
          amount_paid: number
          beat_id: string
          buyer_id: string
          created_at?: string
          id?: string
          license_type: string
          seller_id: string
          status?: string
          transaction_id: string
        }
        Update: {
          amount_paid?: number
          beat_id?: string
          buyer_id?: string
          created_at?: string
          id?: string
          license_type?: string
          seller_id?: string
          status?: string
          transaction_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "beats_sales_beat_id_fkey"
            columns: ["beat_id"]
            isOneToOne: false
            referencedRelation: "beats_store"
            referencedColumns: ["id"]
          },
        ]
      }
      beats_store: {
        Row: {
          audio_track_id: string
          created_at: string
          description: string | null
          download_url: string
          id: string
          is_active: boolean | null
          license_terms: Json
          preview_url: string
          price: number
          title: string
          updated_at: string
          user_id: string
          watermark_enabled: boolean | null
        }
        Insert: {
          audio_track_id: string
          created_at?: string
          description?: string | null
          download_url: string
          id?: string
          is_active?: boolean | null
          license_terms: Json
          preview_url: string
          price: number
          title: string
          updated_at?: string
          user_id: string
          watermark_enabled?: boolean | null
        }
        Update: {
          audio_track_id?: string
          created_at?: string
          description?: string | null
          download_url?: string
          id?: string
          is_active?: boolean | null
          license_terms?: Json
          preview_url?: string
          price?: number
          title?: string
          updated_at?: string
          user_id?: string
          watermark_enabled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "beats_store_audio_track_id_fkey"
            columns: ["audio_track_id"]
            isOneToOne: false
            referencedRelation: "audio_tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      btzee: {
        Row: {
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          continent: Database["public"]["Enums"]["continents"] | null
          id: number
          iso2: string
          iso3: string | null
          local_name: string | null
          name: string | null
        }
        Insert: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Update: {
          continent?: Database["public"]["Enums"]["continents"] | null
          id?: number
          iso2?: string
          iso3?: string | null
          local_name?: string | null
          name?: string | null
        }
        Relationships: []
      }
      cube_presets: {
        Row: {
          created_at: string
          id: string
          name: string
          settings: Json
          texture_urls: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          settings: Json
          texture_urls: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          settings?: Json
          texture_urls?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      distribution_platforms: {
        Row: {
          created_at: string
          id: string
          live_date: string | null
          platform: string
          platform_release_id: string | null
          rejection_reason: string | null
          release_id: string
          status: string
          submission_date: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          live_date?: string | null
          platform: string
          platform_release_id?: string | null
          rejection_reason?: string | null
          release_id: string
          status?: string
          submission_date?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          live_date?: string | null
          platform?: string
          platform_release_id?: string | null
          rejection_reason?: string | null
          release_id?: string
          status?: string
          submission_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "distribution_platforms_release_id_fkey"
            columns: ["release_id"]
            isOneToOne: false
            referencedRelation: "distribution_releases"
            referencedColumns: ["id"]
          },
        ]
      }
      distribution_releases: {
        Row: {
          artist_name: string
          audio_track_id: string
          created_at: string
          explicit: boolean | null
          genre: string
          id: string
          isrc_code: string | null
          language: string
          license_type: string
          metadata: Json | null
          release_date: string
          status: string
          title: string
          upc_code: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          artist_name: string
          audio_track_id: string
          created_at?: string
          explicit?: boolean | null
          genre: string
          id?: string
          isrc_code?: string | null
          language: string
          license_type: string
          metadata?: Json | null
          release_date: string
          status?: string
          title: string
          upc_code?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          artist_name?: string
          audio_track_id?: string
          created_at?: string
          explicit?: boolean | null
          genre?: string
          id?: string
          isrc_code?: string | null
          language?: string
          license_type?: string
          metadata?: Json | null
          release_date?: string
          status?: string
          title?: string
          upc_code?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "distribution_releases_audio_track_id_fkey"
            columns: ["audio_track_id"]
            isOneToOne: false
            referencedRelation: "audio_tracks"
            referencedColumns: ["id"]
          },
        ]
      }
      error_logs: {
        Row: {
          created_at: string | null
          error_message: string
          error_type: string
          id: string
          resolution: string | null
          stack_trace: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_message: string
          error_type: string
          id?: string
          resolution?: string | null
          stack_trace?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string
          error_type?: string
          id?: string
          resolution?: string | null
          stack_trace?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      export_queue: {
        Row: {
          animation_id: string
          completed_at: string | null
          created_at: string
          id: string
          output_url: string | null
          progress: number | null
          settings: Json
          started_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          animation_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          output_url?: string | null
          progress?: number | null
          settings: Json
          started_at?: string | null
          status?: string
          user_id: string
        }
        Update: {
          animation_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          output_url?: string | null
          progress?: number | null
          settings?: Json
          started_at?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "export_queue_animation_id_fkey"
            columns: ["animation_id"]
            isOneToOne: false
            referencedRelation: "animations"
            referencedColumns: ["id"]
          },
        ]
      }
      export_templates: {
        Row: {
          created_at: string
          duration: number
          format: string
          framerate: number
          id: string
          name: string
          resolution: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration: number
          format: string
          framerate: number
          id?: string
          name: string
          resolution: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number
          format?: string
          framerate?: number
          id?: string
          name?: string
          resolution?: string
          user_id?: string
        }
        Relationships: []
      }
      nods_page: {
        Row: {
          checksum: string | null
          id: number
          meta: Json | null
          parent_page_id: number | null
          path: string
          source: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path: string
          source?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path?: string
          source?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nods_page_parent_page_id_fkey"
            columns: ["parent_page_id"]
            isOneToOne: false
            referencedRelation: "nods_page"
            referencedColumns: ["id"]
          },
        ]
      }
      nods_page_section: {
        Row: {
          content: string | null
          embedding: string | null
          heading: string | null
          id: number
          page_id: number
          slug: string | null
          token_count: number | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id: number
          slug?: string | null
          token_count?: number | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id?: number
          slug?: string | null
          token_count?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      revenue_earnings: {
        Row: {
          created_at: string
          currency: string
          earnings_period: string
          id: string
          platform: string
          release_id: string
          revenue: number
          streams: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          earnings_period: string
          id?: string
          platform: string
          release_id: string
          revenue?: number
          streams?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          earnings_period?: string
          id?: string
          platform?: string
          release_id?: string
          revenue?: number
          streams?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "revenue_earnings_release_id_fkey"
            columns: ["release_id"]
            isOneToOne: false
            referencedRelation: "distribution_releases"
            referencedColumns: ["id"]
          },
        ]
      }
      revenue_splits: {
        Row: {
          created_at: string
          id: string
          payout_info: Json | null
          release_id: string
          role: string
          share_percentage: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          payout_info?: Json | null
          release_id: string
          role: string
          share_percentage: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          payout_info?: Json | null
          release_id?: string
          role?: string
          share_percentage?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "revenue_splits_release_id_fkey"
            columns: ["release_id"]
            isOneToOne: false
            referencedRelation: "distribution_releases"
            referencedColumns: ["id"]
          },
        ]
      }
      social_accounts: {
        Row: {
          access_token: string
          created_at: string
          id: string
          platform: string
          platform_user_id: string
          platform_username: string
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          id?: string
          platform: string
          platform_user_id: string
          platform_username: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          id?: string
          platform?: string
          platform_user_id?: string
          platform_username?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      social_shares: {
        Row: {
          content_id: string
          content_type: string
          created_at: string
          engagement_data: Json | null
          id: string
          platform: string
          platform_post_id: string | null
          published_at: string | null
          scheduled_for: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content_id: string
          content_type: string
          created_at?: string
          engagement_data?: Json | null
          id?: string
          platform: string
          platform_post_id?: string | null
          published_at?: string | null
          scheduled_for?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content_id?: string
          content_type?: string
          created_at?: string
          engagement_data?: Json | null
          id?: string
          platform?: string
          platform_post_id?: string | null
          published_at?: string | null
          scheduled_for?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      table_name: {
        Row: {
          data: Json | null
          id: number
          inserted_at: string
          name: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          data?: Json | null
          id?: number
          inserted_at?: string
          name?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          data?: Json | null
          id?: number
          inserted_at?: string
          name?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string
          notification_settings: Json | null
          theme: string | null
          tour_progress: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          notification_settings?: Json | null
          theme?: string | null
          tour_progress?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          notification_settings?: Json | null
          theme?: string | null
          tour_progress?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      video_exports: {
        Row: {
          created_at: string
          duration: number
          format: string
          framerate: number
          id: string
          output_url: string | null
          resolution: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration: number
          format: string
          framerate: number
          id?: string
          output_url?: string | null
          resolution: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number
          format?: string
          framerate?: number
          id?: string
          output_url?: string | null
          resolution?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize:
        | {
            Args: {
              "": string
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      get_page_parents: {
        Args: {
          page_id: number
        }
        Returns: {
          id: number
          parent_page_id: number
          path: string
          meta: Json
        }[]
      }
      halfvec_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      halfvec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      halfvec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      hnsw_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      l2_norm:
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      l2_normalize:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      match_page_sections: {
        Args: {
          embedding: string
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          id: number
          page_id: number
          slug: string
          heading: string
          content: string
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      sparsevec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims:
        | {
            Args: {
              "": string
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
